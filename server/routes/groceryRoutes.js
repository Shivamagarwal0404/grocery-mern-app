// server/routes/groceryRoutes.js
const express = require('express');
const router = express.Router();
const Grocery = require('../models/groceryModel');
const { protect: authMiddleware} = require('../middleware/authMiddleware');

// GET all groceries
router.get('/', authMiddleware, async (req, res) => {
  try {
    const groceries = await Grocery.find().sort({ createdAt: -1 });
    res.json(groceries);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// CREATE grocery
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, price = 0, quantity = 1, imageUrl = '' } = req.body;
    if (!name) return res.status(400).json({ message: 'Name is required' });

    const grocery = new Grocery({ name, price, quantity, imageUrl });
    await grocery.save();
    res.status(201).json(grocery);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// UPDATE grocery
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const updated = await Grocery.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE grocery
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const removed = await Grocery.findByIdAndDelete(req.params.id);
    if (!removed) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
