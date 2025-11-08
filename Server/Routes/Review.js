const express = require('express');
const router = express.Router();
const Review = require('../Models/Review');

// router.post('/', async (req, res) => {
//   try {
//     const { name, comment, rating } = req.body;

//     if (!name || !comment || !rating) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     const newReview = new Review({ name, comment, rating });
//     await newReview.save();

//     res.status(201).json(newReview);
//   } catch (error) {
//     console.error('Error adding review:', error);
//     res.status(500).json({ error: 'Server error' });
//   }
// });
router.post('/', async (req, res) => {
  try {
    const { name, email, comment, rating } = req.body;

    if (!name || !email || !comment || !rating) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const existingReview = await Review.findOne({ email });
    if (existingReview) {
      return res.status(400).json({ error: 'You have already submitted a review!' });
    }

    const newReview = new Review({ name, email, comment, rating });
    await newReview.save();

    res.status(201).json(newReview);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


// GET — Fetch all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
