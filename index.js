require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./dbConnect");
const rootRoute = require("./routes/product.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Import the Sequelize instance
app.use("/api/v1", rootRoute);
app.use((req, res) => {
  res.status(404).send("Route does not exist.....");
});
app.use(async (err, req, res, next) => {
  return res.status(500).json({
    msg: "Some thing is wrong , please try again",
  });
});

const port = process.env.PORT;
const start = () => {
  app.listen(port, () => {
    if (sequelize) {
      console.log("db connect");
    }
    console.log(`server is running: http://localhost:${port}`);
  });
};

start();
