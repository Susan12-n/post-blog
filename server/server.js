const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

// Routes
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoriesRoutes');


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

app.use(errorHandler);

app.get('/', (req, res) => res.send('MERN Blog API running'));

app.listen(PORT, "127.0.0.1", () => {
  console.log(` Server running on http://127.0.0.1:${PORT}`);
});


module.exports = app; 