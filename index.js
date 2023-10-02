const express = require("express");

const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const rootRoute = require("./routes/product.route");
const { readdirSync } = require("fs");

readdirSync("./routes").map((file) =>
  app.use("/api/v1", require("./routes/" + file))
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1", rootRoute);

app.use("/", (req, res) => {
  res.status(200).json({ msg: "check" });
});

app.use("*", (err, req, res) => {
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
