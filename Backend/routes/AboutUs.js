const router = require("express").Router();
let AboutUsDB = require("../models/AboutUs.models");

router.route("/").get((req, res) => {
  AboutUsDB.findOne()
    .then((AboutUs) => res.json(AboutUs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post(async (req, res) => {
  try {
    const about = new AboutUsDB(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create the community" });
  }
});
module.exports = router;
