import PostModel from "../models/postModel.js";

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

    res.status(201).json({ message: "post upload" });
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

export { setPost, getAllPost, getPostById };
