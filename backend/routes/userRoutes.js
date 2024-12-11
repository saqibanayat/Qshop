const express = require('express');
const router = express.Router();
const app = express();
// const { registerUser } = require('../controllers/userController');
// const { loginUser } = require('../controllers/userController');
const user = require("../controllers/userController");
const express = require('express');
const cors = require('cors');

require('dotenv').config();

// Use CORS middleware
app.use(cors({
 // Replace with your frontend's URL
    credentials: true,
  }));
  
  // Other middlewares

  app.use(express.json()); // for parsing application/json

// Define the POST route for user registration
// router.post('/register', registerUser);
// router.post('/login', loginUser);
app.use("/api/users", user);

module.exports = router;
