const Product = require("../model/product.model");

const addGrocery = async (req, res, next) => {
  try {
    const productData = req.body;
    const newProduct = await Product.create({
      productData,
    });

    return res.status(200).json({ newProduct });
  } catch (error) {
    return res.status(400).json({ error }); // You may want to handle the error in a different way based on your application's needs
  }
};

const findAllGrocery = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    return res.status(200).json({ newProduct });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res.status(400).json({ error });
  }
};

const findProductById = async (req, res, next) => {
  const productId = req.params;
  try {
    const product = await Product.findByPk(productId);
    return product;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};
const deleteProductById = async (req, res, next) => {
  const productId = req.params.productId;
  try {
    const deletedProduct = await deleteProductById(productId);
    return res.status(200).json(deletedProduct);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return res.status(200).json(error);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const productIdToUpdate = req.params.productId;
    const updatedDataFromBody = req.body;

    const [rowsUpdated, [updatedProduct]] = await Product.update(
      updatedDataFromBody,
      {
        where: {
          id: productIdToUpdate,
        },
        returning: true,
      }
    );

    if (updatedProduct) {
      console.log("Product updated successfully:", updatedProduct.toJSON());
      res.status(200).json(updatedProduct);
    } else {
      console.log("Product not found or could not be updated.");
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  addGrocery,
  updateProduct,
  deleteProductById,
  findAllGrocery,
  findProductById,
};
