const express = require("express");
const path = require("path");
const todoRouter = require("./routes/todoRoutes");

const app = express();

// const cors = require("cors");
// app.use(cors());

app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/todos", todoRouter);

module.exports = app;
