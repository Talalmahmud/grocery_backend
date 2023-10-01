// models/user.js

// const {  DataTypes, Sequelize } = require("sequelize");
// const sequelize = require("../index"); // Import the Sequelize instance
// const sequelize = require("../dbConnect");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://default:19NKreBcwguH@ep-square-dust-93478546.us-east-1.postgres.vercel-storage.com:5432/verceldb",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // Set to true in production with a valid SSL certificate
      },
    },
  }
);
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
}

testConnection();

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    groceryImage: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "Products", // Make sure this matches your actual table name
  }
);

module.exports = Product;
