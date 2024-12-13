const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

const bodyParser = require("body-parser");
const cors = require("cors");
const authRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const orderRouter = require('./routes/orderRoutes');
const favoriteRoute = require('./routes/favoriteRoutes');
const categoryRoute = require('./routes/categoryRoutes');
app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(
	cookieSession({
		name: "session",
		keys: ["qshop"],
		maxAge: 24 * 60 * 60 * 100,
	})
);
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
app.use('/api/order',orderRouter);
app.use('/api/favorite',favoriteRoute);
app.use('/api/category',categoryRoute);



// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;
