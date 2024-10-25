// server.js
// import express from 'express';
// import 'cookie-parser';
// import mongoose from 'mongoose';
// import cookieParser from 'cookie-parser';
// import bodyparser from 'body-parser';
// import cors from 'cors';
// const express = require('express');
// const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// // const userRoutes = require('./routes/user.router'); // Import user routes
// const userRoutes = require('./routes/user.router');
// // cors origining
// app.use(cors({
//     origin:"http://localhost:3000",
//     credentials: true
// }))

// // generic middlewares
// app.use(bodyparser.json({ limit: "4kb" }));
// app.use(express.static('public'));
// app.use(bodyparser.urlencoded({extended: true}));
// app.use(cookieParser());

// const PORT = process.env.PORT

// // Middleware
// app.use(express.json()); // Middleware to parse JSON bodies


// // Use user routes
// app.use('/api', userRoutes); // All routes in userRoutes will be prefixed with /api

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express application
const app = express(); // Add this line

// Import user routes
const userRoutes = require('./routes/user.router');

// CORS configuration
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

// Generic middlewares
app.use(bodyParser.json({ limit: "4kb" }));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies

// Use user routes
app.use('/api', userRoutes); // All routes in userRoutes will be prefixed with /api

const PORT = process.env.PORT || 5000; // Ensure you have a default port if not set

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
