const express = require("express");
const cors = require("cors");

const app = express();

//settings
app.set("port", process.env.PORT || 4000);
//middlewares

//routes

module.exports = app;
