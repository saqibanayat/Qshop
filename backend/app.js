const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');
const favoriteRoute = require('./routes/favoriteRoutes');
app.use(cors({
  origin: ['http://localhost:3001',],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controllers/userController");


// app.use("/api/users", user);
app.use('/api/user',authRouter);
app.use('/api/product',productRouter);
app.use('/api/order',orderRouter)
app.use('/api/favorite',favoriteRoute)



// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
