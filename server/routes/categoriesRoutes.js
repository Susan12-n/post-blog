const express = require('express');
const router = express.Router();
const Category = require('../models/categories');


router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ name: 1 });
    if (!categories.length) {
      return res.status(404).json({ message: "No categories found" });
    }
    res.json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    res.status(500).json({ error: "Server error" });
  }
});


module.exports = router;
