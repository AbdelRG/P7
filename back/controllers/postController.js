import PostModel from "../models/postModel";

const setPost = async (req, res) => {
  const postBody = JSON.parse(req.body.post);
  const { title, text } = postBody;
  const userId = req.user.id;
  const imageUrl = "http://localhost:3000/" + req.file.path;
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
    res.status(500).send("INTERNAL SERVER ERROR");
  }
};

export { setPost };
