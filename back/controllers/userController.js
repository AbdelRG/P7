import UserModel from "../models/userModel.js";
import sse from "../config/sse.js";

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

const updateUser = async (req, res) => {
  const user = await UserModel.findOne({
    where: { id: req.user.id },
    attributes: { exclude: ["password"] },
  });
  const bio = req.body.bio;
  if (bio !== "") {
    user.bio = bio;
  }
  let imageUrl = "";
  if (req.file !== undefined) {
    imageUrl = "http://localhost:3000/" + req.file.path;
  }

  user.imageUrl = imageUrl;
  await user.save();
  res.status(200).json({ message: "profil mis a jour" });
};

const getAllUsers = async (req, res) => {
  const user = await UserModel.findAll({
    attributes: { exclude: ["password"] },
  });
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  const user = await UserModel.findOne({
    where: { id: req.body.userId },
  });

  await user.destroy({ force: true });
  sse.send(user, "deleteUser");

  res.status(200).json({ message: "utilisateur supprimer" });
};

export { getUser, getUserById, updateUser, getAllUsers, deleteUser };
