const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // token'ı alıyoruz.
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authentication Failed" });
    }
    const token = tokenHeader.replace("Bear er", "");
    // token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // doğrulanmış kullanıcı bigilerini req objesine ata.
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authentication Failed" });
  }
};
