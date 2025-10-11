const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // ✅ add this at the top

// MongoDB connection
const uri = "mongodb+srv://kiruthika:kitty514@cluster0.4oqqr1c.mongodb.net/pikivadb?retryWrites=true&w=majority";

const app = express();
app.use(cors({
  origin: 'https://pinkivafrontend.vercel.app', // frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true // if you use cookies
}));
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
})
.then(() => console.log('🚀 MongoDB Connected'))
.catch(err => console.error('❌ Connection error:', err));

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

// ---------- SERVE REACT FRONTEND ----------
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// ---------- START SERVER ----------
module.exports = app;







