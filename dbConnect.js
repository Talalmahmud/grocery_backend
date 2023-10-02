// // const pg = require("pg");

// // const { Pool } = pg;

// // const pool = new Pool({
// //   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Set to true in production with a valid SSL certificate
    },
  },
});

sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error.message);
  }
}

testConnection();

// const sequelize = new Sequelize(
//   process.env.POSTGRES_DATABASE,
//   process.env.POSTGRES_USER,
//   process.env.POSTGRES_PASSWORD |
//     {
//       host: process.env.POSTGRES_HOST,
//       dialect: "postgres",
//     }
// );
module.exports = sequelize;
