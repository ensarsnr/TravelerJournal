const Post = require("../models/post")
const User = require("../models/user")

const deleteImage = async (req, res) => {
  const { imageId } = req.body;

  try {
    // Kullanıcının ID'sini alın
    const userId = req.user ? req.user.userId : null;
    if (!userId) {
      return res.status(404).json({ error: "User not found" });
    }

    // İlgili resmi veritabanından silin
    await Post.findByIdAndDelete(imageId);

    // Kullanıcının sahip olduğu post listesinden silinen resmin ID'sini çıkarın
    const user = await User.findById(userId);
    user.posts = user.posts.filter((postId) => postId.toString() !== imageId);
    await user.save();

    // const imagePath = path.join(uploadsDir, imageName);
    // fs.unlinkSync(imagePath);

    // Başarılı yanıtı döndür
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.log(`Delete image error: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteImage;
