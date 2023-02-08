exports.handlePostRequest = (req, res, next) => {
  if (!req.files || !req.files.file) {
    return res.status(422).send("Please upload an image.");
  }
  next();
};
