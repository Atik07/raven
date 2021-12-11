const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    filePath: {
      type: String,
    },
    fileType: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videoSchema);
module.exports = { Video };
