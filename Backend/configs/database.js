const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Database is Connected"))
    .catch((err) => {
      console.log("Database connection failed", err);
      process.exit(1);
    });
};