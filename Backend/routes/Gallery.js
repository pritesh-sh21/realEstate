const router = require("express").Router();
let GalleryDB = require("../models/Gallery.models");

router.route("/").get((req, res) => {
  GalleryDB.find()
    .then((Gallery) => res.json(Gallery))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post(async (req, res) => {
  const arr = req.body;
  try {
    const savedAboutUsArray = await Promise.all(
      arr.map(async (post) => {
        return await GalleryDB.create(post);
      })
    );

    res.status(201).json(savedAboutUsArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create entries" });
  }
});
module.exports = router;
