const express = require("express");
const { connectWithMongo } = require("./connection");

const localUserRouter = require("./routes/localusers");
const mongoUsersRouter = require("./routes/mongousers");

const { logReqRes } = require("./middlewares");

const app = new express();
const PORT = 8000;

// Connection with DB
connectWithMongo("mongodb://127.0.0.1:27017/nodejs-begineer");

// MIDDLEWARE to convert url-x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// MIDDLEWARE to log all the Request
app.use(logReqRes("log.txt"));

// ROUTER Local users
app.use("/localusers", localUserRouter);
app.use("/mongousers", mongoUsersRouter);

app.listen(PORT, () => console.log("Server Started on Port" + PORT));
