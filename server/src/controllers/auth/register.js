const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Register olduktan sonra password hasleme işlemi
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // JWT TOKEN oluşturur.
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // kullanıcıyı db'ye kayıt eder.
    await user.save();

    res.json({ token, message: "Register successful" });
  } catch (error) {
    res.status(500).json({ message: `Register Error ${error}` });
  }
};

module.exports = register;
