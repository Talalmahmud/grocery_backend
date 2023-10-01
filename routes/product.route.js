const express = require("express");
const { addGrocery } = require("../controllers/product.controller");
const router = express.Router();

router.get("/grocery", addGrocery);

module.exports = router;
