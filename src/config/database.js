const { Sequelize } = require("sequelize");

const db = new Sequelize("pagination", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
