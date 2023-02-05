const { v4: uuidv4 } = require("uuid");

const File = require("../models/file.model");

const getAllFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createFile = async (req, res) => {
  try {
    if (!req.files || !req.files.file) {
      return res.status(400).send("Please upload an image.");
    }
    const image = req.files.file;
    const uploadPath = __dirname + "/uploads/" + image.name;

    image.mv(uploadPath, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });

    const newFile = new File({
      id: uuidv4(),
      url: uploadPath,
    });
    await newFile.save();
    res.status(201).json(newFile);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getAllFiles,
  createFile,
};
