const Product = require("../model/product.model");

const addGrocery = async (req, res, next) => {
  try {
    const newGroceryProduct = await Grocery.create({
      groceryName: "Bananas",
      groceryImage: "bananas.jpg",
      price: 1.49,
      description: "Sweet and ripe bananas.",
    });
    const newGrocery = await Product.create(newGroceryProduct);
    res.status(200).json({ newGrocery });
  } catch (error) {
    res.status(400).json({ error }); // You may want to handle the error in a different way based on your application's needs
  }
};

module.exports = { addGrocery };
