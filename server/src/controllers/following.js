const User = require("../models/user");

const follow = async (req, res) => {
  const { followId } = req.body;
  try {
    const userId = req.user ? req.user.userId : null;

    if (!userId) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = await User.findById(followId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.followers.push(user);
    await user.save();

    res.status(201).json({ message: "Successfully tracked", follow: user });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = follow;
