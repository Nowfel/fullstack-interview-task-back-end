const express = require("express");
const router = express.Router();

const { getAllFiles, createFile } = require("../controllers/file.controller");

router.get("/", getAllFiles);

router.post("/", createFile);

module.exports = router;
