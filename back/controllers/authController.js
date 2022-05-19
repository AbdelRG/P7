import UserModel from "../models/userModel.js";

import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
  const { email, password, pseudo } = req.body;

  try {
    const user = UserModel.build({ email, password, pseudo });
    console.log(user);
    await user.save();

    res.status(201).json({ message: "inscription reussi" });
  } catch (err) {
    res.status(400).send("Bad Request");
  }
};

// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
// };

// module.exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await UserModel.signIn(email, password);
//     const token = createToken(user._id);

//     res.status(200).json({ userId: user._id, token: token });
//   } catch (err) {
//     res.status(400).send("Bad Request");
//   }
// };
export default signUp;
