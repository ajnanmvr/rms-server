const express = require("express");
const App = express();
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const PORT = process.env.PORT || 5000;
dotenv.config();
const ConnectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
App.get("/", (req, res) => {
  res.send("Welcome to the API Homepage!");
});

App.listen(PORT, () => {
  ConnectDB();
  console.log(`listening on port ${PORT}!`);
});
