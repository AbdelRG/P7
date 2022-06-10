import UserModel from "../models/userModel.js";

const getUser = async (req, res) => {
  const userId = req.user.id;
  const user = await UserModel.findOne({
    where: { id: userId },
    attributes: { exclude: ["password"] },
  });

  res.status(200).json({ user: user });
};

const getUserById = async (req, res) => {
  const user = await UserModel.findOne({
    where: { id: req.body.userId },
    attributes: { exclude: ["password"] },
  });
  res.status(200).json({ user: user });
};

export { getUser, getUserById };
