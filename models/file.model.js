const mongoose = require("mongoose");

const fileSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("File ", fileSchema);
