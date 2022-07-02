import PostModel from "../models/postModel.js";
import ComentModel from "../models/comentModel.js";
import sse from "../config/sse.js";
//import Op from "sequelize";
import { getUserRole } from "./userController.js";
const setPost = async (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const userId = req.user.id;

  let imageUrl = "";
  if (req.file !== undefined) {
    imageUrl = "http://localhost:3000/" + req.file.path;
  }
  const post = PostModel.build({
    title: title,
    text: text,
    userId: userId,
    imageUrl: imageUrl,
  });

  try {
    await post.save();
    sse.send(post, "post");

    res.status(201).send(post);
  } catch (err) {
    console.log(err);
    res.status(500).send("INTERNAL SERVER ERROR");
  }
};

const getAllPost = async (req, res) => {
  const post = await PostModel.findAll({
    order: [["id", "DESC"]],
  });
  res.status(200).send(post);
};

const getPostById = async (req, res) => {
  const post = await PostModel.findOne({
    where: { id: req.body.postId },
  });

  res.status(200).json({ post: post });
};

const getPostByUserId = async (req, res) => {
  const userId = req.user.id;
  const post = await PostModel.findAll({
    where: { userId: userId },
    order: [["id", "DESC"]],
  });
  res.status(200).send(post);
};

const deletePost = async (req, res) => {
  const post = await PostModel.findOne({
    where: { id: req.body.postId },
  });

  const comments = await ComentModel.destroy({
    where: { postId: req.body.postId },
  });

  await post.destroy();
  sse.send(post, "deletePost");

  res.status(200).json({ message: "post supprimé" });
};

const getDeletedPost = async (req, res) => {
  const post = await PostModel.findAll({
    // where: {
    //   deletedAt: {
    //     [Op.ne]: null,
    //   },
    // },
    paranoid: false,
  });
  const response = post.filter((post) => post.deletedAt !== null);
  const userRole = await getUserRole(req.user.id);
  if (userRole == 1) {
    res.status(200).send(response);
  } else res.sendStatus(403);
};

const restorePost = async (req, res) => {
  const post = await PostModel.findOne({
    where: { id: req.body.postId },
    paranoid: false,
  });
  const userRole = await getUserRole(req.user.id);
  if (userRole == 1) {
    await post.restore();
    sse.send(post, "restorePost");
    res.status(200).send(post);
  } else res.sendStatus(403);
};

const adminDeletePost = async (req, res) => {
  const post = await PostModel.findOne({
    where: { id: req.body.postId },
    paranoid: false,
  });
  const userRole = await getUserRole(req.user.id);
  if (userRole == 1) {
    const comments = await ComentModel.destroy({
      where: { postId: req.body.postId },
      force: true,
    });
    await post.destroy({ force: true });
    sse.send(post, "adminDeletePost");
    res.status(200).send(post);
  } else res.sendStatus(403);
};

export {
  setPost,
  getAllPost,
  getPostById,
  getPostByUserId,
  deletePost,
  getDeletedPost,
  restorePost,
  adminDeletePost,
};
