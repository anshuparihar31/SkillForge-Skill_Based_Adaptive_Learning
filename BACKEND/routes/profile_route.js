// routes/profileRoutes.js
const express = require('express');
const Profile = require('../models/Profile'); // Path to your Profile model
const router = express.Router();

// POST route to save a profile
router.post('/', async (req, res) => {
  try {
    console.log("Received data:", req.body); // Log the request data
    const profile = new Profile(req.body);   // Assuming Profile is your Mongoose model
    await profile.save();                    // Save the profile to the database
    res.status(201).send("Profile saved successfully!");
  } catch (error) {
    console.error("Error saving profile:", error); // Log the error
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
