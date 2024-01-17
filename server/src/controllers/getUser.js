const User = require("../models/user");

const getUser = async (req, res) => {
  try {
    // Kullanıcı idsini alıyoruz
    const userId = req.user ? req.user.userId : null;

    if (!userId) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Kullanıcının adını ve diğer bilgilerini döndürüyoruz.
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ user: user });
  } catch (error) {
    console.log(`Get user error: ${error}`);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getUser;
