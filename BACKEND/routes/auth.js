const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');  // Adjust the path according to your project structure
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    console.log('Registering user:', { name, email, mobile });

    // Check if the user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    // Save the user in the database
    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Store user details in the session
    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email
    };

    res.json({ msg: 'Login successful', user: req.session.user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get user profile route
router.get('/profile', (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }

  res.json({ user: req.session.user });
});

// Logout route
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ msg: 'Failed to logout' });
    }

    res.json({ msg: 'Logout successful' });
  });
});

module.exports = router;
