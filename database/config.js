const Sequelize = require("sequelize");
require("dotenv").config();
const db = process.env.DATABASE;
const user = process.env.USER_DB;
const pass = process.env.PASS_DB;
const sequelize = new Sequelize(db, user, pass, {
/* const sequelize = new Sequelize("Tinder", "root", "root", { */
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;

