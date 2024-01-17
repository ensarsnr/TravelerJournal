const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Kullanıcıyı bul
    const user = await User.findOne({ username });

    // Kullanıcının varlığını kontrol et
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Şifre kontrolü, compare karşılaştırma işini görüyor.
    const passwordMatch = await bcrypt.compare(password, user.password);

    // password'un doğrulunu kontrol ediyoruz. True ise token oluştururp girişi sağlayacaz.
    if (passwordMatch) {
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Login successful", token });
    } else {
      // password hatalıysa buraya giriş yapacak.
      return res.status(401).json({ message: "Password doesn't match" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = login;
