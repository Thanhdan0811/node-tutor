const Sequelize = require("sequelize");

const sequelize = new Sequelize("node_basic", "root", "thanhdan0308", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
