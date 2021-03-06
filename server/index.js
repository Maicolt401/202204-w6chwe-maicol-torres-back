const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { notFoundError, generalError } = require("./middlewares/error");
const robotsRouter = require("./router/robotsRouter");

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/robots", robotsRouter);

app.use(notFoundError);
app.use(generalError);

module.exports = app;
