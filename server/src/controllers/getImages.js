const Post = require("../models/post");
const User = require("../models/user");

const getImages = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("user"); // Kullanıcının bilgilerini içeren postları çek

    // Eğer post bulunamazsa, 404 hatası döndür
    if (!posts || posts.length === 0) {
      return res.status(404).json({ error: "No posts found" });
    }

    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getImages;
