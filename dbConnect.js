// // const pg = require("pg");

// // const { Pool } = pg;

// // const pool = new Pool({
// //   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://default:19NKreBcwguH@ep-square-dust-93478546.us-east-1.postgres.vercel-storage.com:5432/verceldb"
);
module.exports = sequelize;
