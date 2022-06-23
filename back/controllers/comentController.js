import ComentModel from "../models/comentModel.js";

const setComent = async (req, res) => {
  const text = req.body.text;
  const userId = req.user.id;
  const postId = req.body.postId;

  const coment = ComentModel.build({
    text: text,
    userId: userId,
    postId: postId,
  });
  try {
    await coment.save();

    res.status(201).json({ message: "coment upload" });
  } catch (err) {
    console.log(err);
    res.status(500).send("INTERNAL SERVER ERROR");
  }
};

const getComentsByPostId = async (req, res) => {
  const coments = await ComentModel.findAll({
    where: { postId: req.body.postId },
  });
  res.status(200).send(coments);
};

const deleteComent = async (req, res) => {
  const coment = await ComentModel.findOne({
    where: { id: req.body.comentId },
  });

  await coment.destroy();

  res.status(200).json({ message: "commentaire supprimer" });
};

export { setComent, getComentsByPostId, deleteComent };
