const router = require("express").Router();
let TeamDB = require("../models/Team.models");

router.route("/").get((req, res) => {
  TeamDB.find()
    .then((Team) => res.json(Team))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/").post(async (req, res) => {
  try {
    const about = new TeamDB(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create the community" });
  }
});

module.exports = router;
