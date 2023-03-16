// @/main.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Space } = require("./models/space");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/space", async (req, res) => {
  const allSpace = await Space.find();
  return res.status(200).json({data:allSpace});
});

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/"
    );
    app.listen(4000, () => console.log("Server started on port 4000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
