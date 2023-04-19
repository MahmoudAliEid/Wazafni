const Sequelize = require("sequelize");
const sequelize = new Sequelize("employee", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = sequelize;
