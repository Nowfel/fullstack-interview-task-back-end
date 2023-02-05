const express = require("express");

const cors = require("cors");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
require("./config/db");

const fileRouter = require("./routes/file.route");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("upload"));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/files", fileRouter);

app.get("/", (req, res) => {
  res.status(404).json({
    message: "Server is running",
  });
});

// route not found error
app.use((req, res, next) => {
  res.status(404).json({
    message: "route not found",
  });
});

//handling server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "something broke",
  });
});

module.exports = app;
