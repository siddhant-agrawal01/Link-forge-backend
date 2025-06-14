// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const connectDB = require('./config/db');

// dotenv.config();
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use('/api/url', require('./routes/urlRoutes'));

// app.use('/short', require('./routes/redirectRoutes'));

// const PORT = process.env.PORT || 5000;
// app.listen(5000, () => console.log(`Server running on port 5000`));

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Ensure database connection on each request
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Database connection failed:', error);
    res.status(500).json({ error: 'Database connection failed' });
  }
});

app.use('/api/url', require('./routes/urlRoutes'));
app.use('/short', require('./routes/redirectRoutes'));

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ message: 'URL Shortener API is running!' });
});

const PORT = process.env.PORT || 5000;

// For local development only
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;