const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // token'ı alıyoruz.
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Authentication Failed" });
    }
    const token = tokenHeader.replace("Bearer ", ""); // Doğru şekilde ayıklama yapılmalı
    // token'ı doğrula
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // doğrulanmış kullanıcı bilgilerini req objesine ata.
    req.user = decoded;
    next();
  } catch (error) {
    console.error(`Authentication error: ${error.message}`);
    
    // Hata JWT'nin süresi dolmuşsa (expired), yeni bir token oluşturabilirsiniz
    if (error.name === "TokenExpiredError") {
      res.setHeader("Authorization", `Bearer ${newToken}`);
      return res.status(401).json({ message: "Token expired. New token provided." });
    }

    // Diğer hata durumlarını burada ele alabilirsiniz
    return res.status(401).json({ message: "Authentication Failed" });
  }
};
