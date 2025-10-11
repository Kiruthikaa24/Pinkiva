const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// ✅ Correct MongoDB Atlas URI (don’t include < >)
const uri = "mongodb+srv://kiruthika:kitty514@cluster0.4oqqr1c.mongodb.net/pikivadb?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000
})
.then(() => console.log('🚀 MongoDB Connected'))
.catch(err => console.error('❌ Connection error:', err));


// ✅ Import User model (make sure ./models/User.js exists)
const User = require('./models/User');

// Test Route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// ✅ Signup Route
app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user exists
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

// ✅ Login Route
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

// ✅ Start Server
const PORT =  process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





