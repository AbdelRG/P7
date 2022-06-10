import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Post = sequelize.define("Post", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1, 140],
    },
  },
  text: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [1, 280],
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [0, 1024],
    },
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Post;
