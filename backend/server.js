const app = require("./app");
const path =require('path')
const express= require('express');
const connectDatabase = require("./db/Database");


// Handling uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}
// connect db
connectDatabase();

app.use('/images',express.static(path.join(__dirname, 'images')))

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on http://localhost:${process.env.PORT}`
  );
});

// unhandled promise rejection
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Optionally exit the process
  process.exit(1);
});
















// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();
// const app = require("./routes/userRoutes");

// // const app = express();

// // // Use CORS middleware
// // app.use(cors({
// //   origin: 'http://localhost:3001', // Replace with your frontend's URL
// //   credentials: true,
// // }));

// // // Other middlewares
// // app.use(express.json()); // for parsing application/json

// // Routes
// // app.use('/api/users', require('./routes/userRoutes'));

// // Connect to the database
// mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Database connected'))
  
//   .catch(err => console.log('Database connection error:', err));

// // Start the server
// app.listen(process.env.PORT, () => {
//   console.log(`Server running on port ${process.env.PORT}`);
// });
