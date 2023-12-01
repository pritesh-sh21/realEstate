const router = require("express").Router();
let AdminDB = require("../models/Admin.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const salt = bcrypt.genSaltSync(10);
const secret = "bhjbdjwj3b34b43bhj42jjsjjhbjdcjwa";

router.route("/login").post(async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await AdminDB.findOne({ username: username });
  // now to verify the password user is inserting
  const passOk = bcrypt.compareSync(password, userDoc.password); // true-if pass matches else false
  if (passOk) {
    // logged in
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      console.log(token);
      res.status(200).json({
        token,
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(404).json("wrong credentials");
  }
});

router.route("/register").post(async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  try {
    // to handle unique users registration, use try-catch
    const userDoc = await AdminDB.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
    console.log(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
