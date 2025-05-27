const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User');

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Signup
router.post('/signup', async (req, res) => {
  const { userId, name, password } = req.body;
  if (!userId || !name || !password) return res.status(400).json({ message: 'All fields are required' });

  try {
    const existingUser = await User.findOne({ userId });
    if (existingUser) return res.status(409).json({ message: 'User ID already exists' });

    const newUser = new User({ userId, name, password });
    await newUser.save();
    return res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { userId, password } = req.body;
  if (!userId || !password) return res.status(400).json({ message: 'All fields are required' });

  try {
    const user = await User.findOne({ userId });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, userId: user.userId }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Protected route
router.get('/me', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
