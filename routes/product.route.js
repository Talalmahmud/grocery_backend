const express = require("express");
const {
  addGrocery,
  findAllGrocery,
  deleteProductById,
  updateProduct,
  findProductById,
} = require("../controllers/product.controller");
const router = express.Router();

router.post("/grocery", addGrocery);
router.get("/", findAllGrocery);
router.get("/:productID", findProductById);
router.delete("/:productID", deleteProductById);
router.put("/:productId", updateProduct);

module.exports = router;
