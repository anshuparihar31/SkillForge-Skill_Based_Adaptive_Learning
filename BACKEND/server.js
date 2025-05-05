const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const axios = require('axios'); // For Hugging Face API integration
require('dotenv').config(); // For environment variables

// Import routes and models
const User = require('./models/User');
const contactRoutes = require('./routes/contact');
const profileRoutes = require('./routes/profile_route');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// CORS Configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://your-production-frontend.com'
    ];

    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('CORS policy error: Origin not allowed'), false);
    }
  },
  methods: ['GET', 'POST'],
  credentials: true,
};
app.use(cors(corsOptions));

// Session Configuration
app.use(
  session({
    secret: 'your_generated_secret_key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === 'production' },
  })
);

// MongoDB Connection
const connectWithRetry = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/EDI')
    .then(() => console.log('MongoDB connected to EDI database'))
    .catch((err) => {
      console.error('MongoDB connection error:', err);
      setTimeout(connectWithRetry, 5000); // Retry connection after 5 seconds
    });
};
connectWithRetry();

// User Registration Route
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ msg: 'Server error', error: err.message });
  }
});

// User Login Route
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    req.session.user = {
      id: user._id,
      name: user.name,
      email: user.email,
    };

    res.json({ msg: 'Login successful', user: req.session.user });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Hugging Face Course Categorization Route
const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/bart-large-mnli';
const HUGGING_FACE_API_TOKEN = process.env.HUGGING_FACE_API_TOKEN;

app.post('/categorize', async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  try {
    const headers = {
      Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    const response = await axios.post(
      HUGGING_FACE_API_URL,
      {
        inputs: content,
        parameters: { candidate_labels: ['Basic', 'Intermediate', 'Advanced'] },
      },
      { headers }
    );

    const { labels, scores } = response.data;

    if (labels && labels.length > 0) {
      const category = labels[0];
      const keywords = []; // Placeholder for keyword extraction logic
      return res.json({ keywords, category });
    } else {
      return res.status(500).json({ error: 'No labels found in the response' });
    }
  } catch (error) {
    console.error('Error processing the content:', error);

    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }

    res.status(500).json({ error: 'An error occurred while processing the content' });
  }
});

app.use('/api/contactus', contactRoutes);
app.use('/api/profile', profileRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
