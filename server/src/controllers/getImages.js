const Post = require("../models/post");

const getImages = async (req, res) => {
  try {
    const images = await Post.find({});
    res.status(200).json({ images });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getImages;
