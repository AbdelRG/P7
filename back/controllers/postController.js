import PostModel from "../models/postModel.js";
import ComentModel from "../models/comentModel.js";
import sse from "../config/sse.js";
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
  const post = await PostModel.findAll();
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

  res.status(200).json({ message: "post supprimé" });
};

export { setPost, getAllPost, getPostById, getPostByUserId, deletePost };
