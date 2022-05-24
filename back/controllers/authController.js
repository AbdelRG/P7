import UserModel from "../models/userModel.js";
import { signUpErrors, loginErrors } from "../utils/errorUtils.js";
import jwt from "jsonwebtoken";

const signUp = async (req, res) => {
  const { email, password, pseudo } = req.body;

  try {
    const user = UserModel.build({ email, password, pseudo });

    console.log(await user.save());

    res.status(201).json({ message: "inscription reussi" });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(400).send({ errors });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.prototype.signIn(email, password);
    const token = createToken(user.id);

    res.status(200).json({ userId: user.id, token: token });
  } catch (err) {
    const errors = loginErrors(err);

    res.status(400).send({ errors });
  }
};

export { signUp, login };
