const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config();

// MongoDB connection
const uri = process.env.MONGO_URI;

const app = express();
app.use(cors({
  origin: 'https://pinkivafrontend.vercel.app', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if you use cookies
}));
app.use(express.json());

mongoose.connect(uri)
  .then(() => console.log('🚀 MongoDB Connected Successfully'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err.message));

.then(() => console.log('🚀 MongoDB Connected Successfully'))
.catch(err => {
  console.error('❌ MongoDB Connection Error:', err.message);
});


// Import User model
const User = require('./models/User');

// ---------- API ROUTES ----------
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: 'Signup successful', user: newUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ---------- START SERVER ----------
module.exports = app;







