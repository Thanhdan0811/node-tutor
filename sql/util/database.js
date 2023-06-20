const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_basic", "root", "123456", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
