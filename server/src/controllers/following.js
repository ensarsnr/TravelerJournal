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

    if (user.followers.includes(userId)) {
      const filteredFollowers = user.followers.filter(
        (id) => id.toString() !== userId
      );
      user.followers = filteredFollowers;
      await user.save();
      return res
        .status(400)
        .json({ message: "This user is already followed.", follow: user });
    } else {
      user.followers.push(userId);
      await user.save();
    }

    res
      .status(201)
      .json({
        message: "The user has been successfully followed.",
        follow: user,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = follow;
