const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Kullanıcıyı bul
    const user = await User.findOne({ username });
    // Kullanıcının varlığını kontrol ediyoruz.
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }
    // Şifre kontrolü, compare karşılaştırma işini görüyor.
    const passwordMatch = await bcrypt.compare(password, user.password); // kullanıcının passwordu ile girilen password'u karşılaştırıyor.

    // password'un doğrulunu kontrol ediyoruz. True ise token oluştururp girişi sağlayacaz.
    if (passwordMatch) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(400).json({ message: "Login sucessful" });
    } else {
      // password hatalıysa buraya giriş yapacak.
      res.status(400).json({ message: "Password doesn't match" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = login;
