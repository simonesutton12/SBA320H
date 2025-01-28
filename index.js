const express = require('express');
const mongoose = require('mongoose');
const app = express();  // Create an Express app
// Middleware setup     
app.use(express.json());  // Parse incoming JSON data
// Database connection setup
mongoose.connect('mongodb://localhost:5000/recipeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

    
