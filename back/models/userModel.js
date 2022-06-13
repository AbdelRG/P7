import bcrypt from "bcrypt";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      isLowercase: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [6, 1024],
    },
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isLowercase: true,
      len: [3, 15],
    },
  },
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [0, 1024],
    },
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [0, 1024],
    },
  },
});

//play function before save into DB

User.beforeCreate(async (user, options) => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);
});

User.prototype.signIn = async (email, password) => {
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};

export default User;
