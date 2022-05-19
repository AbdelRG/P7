import Sequelize from "sequelize";
const db = new Sequelize("p7", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
});

export default db;
