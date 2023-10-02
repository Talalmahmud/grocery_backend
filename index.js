const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./dbConnect");
const rootRoute = require("./routes/product.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", rootRoute);

app.get("/t", (err, req, res) => {
  res.status(404).json({
    msg: "Some thing is wrong , please try again",
  });
});

const port = process.env.PORT;
const start = () => {
  app.listen(port, () => {
    console.log(`server is running: http://localhost:${port}`);
  });
};

start();
