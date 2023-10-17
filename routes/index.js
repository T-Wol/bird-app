// routes/index.js
const express = require('express');
const router = express.Router();
const Bird = require('../models/bird');


router.get('/', (req, res) => {
  res.render('home');
});

// Render the form to create a new bird
router.get('/birds/create', (req, res) => {
  res.render('create-bird');
});

// Handle the form submission
router.post('/birds/create', (req, res) => {
  const { species, nickname, status } = req.body;

  // Create a new bird object
  const newBird = { species, nickname, status };

  // Log the bird object
  console.log('New Bird:', newBird);

  // Redirect to the confirmation view
  res.render('confirmation', { bird: newBird });
});

module.exports = router;
