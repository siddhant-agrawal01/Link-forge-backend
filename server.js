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
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/url', require('./routes/urlRoutes'));
app.use('/short', require('./routes/redirectRoutes'));

const PORT = process.env.PORT || 5000;

// For local development
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// Export for Vercel
module.exports = app;