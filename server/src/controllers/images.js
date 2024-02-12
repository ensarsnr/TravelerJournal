const multer = require("multer");
const path = require("path");
const fs = require("fs"); 
const Post = require("../models/post");
const User = require("../models/user");

// Bu kod bloğu, bir dosya sistemi dizinini kontrol etmekte ve eğer bu dizin mevcut değilse,
// o dizini oluşturmaktadır
const uploadsDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer ayarları
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir); // uploadsDir değişkenini kullanarak mutlak yolu belirt
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Resmin ismi
  },
});


const upload = multer({ storage: storage });
const images = async (req, res) => {
  const { caption } = req.body;

  try {
    const userId = req.user ? req.user.userId : null;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Multer middleware for handling file upload
    upload.single("image")(req, res, async function (err) {
      if (err) {
        console.log('Multer error:', err);
        return res.status(500).json({ error: "Unknown error" });
      }

      // Check if req.file exists
      if (!req.file) {
        return res.status(400).json({ error: "No file provided" });
      }

      // Yüklü resmin bilgileri
      const image = {
        user: userId,  // Set the 'user' field
        image: req.file.filename,
        caption: caption || "",  // Use the 'caption' field if defined, or an empty string
      };

      // Yeni bir Post oluştur ve veritabanına kaydet
      const newPost = new Post(image);
      await newPost.save();

      // Kullanıcının posts array'ine yeni post id'sini ekle
      user.posts.push(newPost._id);
      await user.save();

      res.status(201).json({
        message: "Resim başarıyla yüklendi.",
        post: newPost,
      });
    });
  } catch (error) {
    console.log(`Post images error: ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};


const deleteImage = async (req, res) => {
  const {imageId} = req.body;

  try {

  } catch (error) {
    res.status(500).json({message: "Internal server error"})
  }
}

module.exports = images;
