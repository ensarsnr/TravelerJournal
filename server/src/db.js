const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected Database");
      })
      .catch((err) => {
        console.log(`MongoDB connected error: ${err}`);
      });
  } catch (error) {}
};

module.exports = connectDB;
