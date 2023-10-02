const express = require("express");
const {
  getAllProducts,
  searchProducts,
  filterProductsByPrice,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/product.controller");
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/products/search", searchProducts);
router.get("/products/filter", filterProductsByPrice);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
