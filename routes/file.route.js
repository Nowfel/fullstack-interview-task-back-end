const express = require("express");
const router = express.Router();

const { getAllFiles, createFile } = require("../controllers/file.controller");
const { handlePostRequest } = require("../validation/file/post.request");

router.get("/", getAllFiles);

router.post("/", handlePostRequest, createFile);

module.exports = router;
