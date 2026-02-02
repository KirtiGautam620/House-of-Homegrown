const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findOne({ id: Number(req.params.id) });
    if (!category) return res.status(404).json("Category not found");
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const last = await Category.findOne().sort({ id: -1 });
    const id = last && last.id ? last.id + 1 : 1;
    const { name, description } = req.body;
    const slug = name.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "");
    const category = new Category({ id, name, slug, description });
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { id: Number(req.params.id) },
      req.body,
      { new: true }
    );
    if (!updatedCategory)
      return res.status(404).json("Category not found");

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({
      id: Number(req.params.id)
    });
    if (!deleted)
      return res.status(404).json("Category not found");
    res.status(200).json("Category deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
