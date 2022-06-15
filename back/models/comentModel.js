import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Coment = sequelize.define("Coment", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [1, 280],
    },
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Coment;
