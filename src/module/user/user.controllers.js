import { createUser, loginUser } from "./user.service.js";
import generateToken from "../../utils/generateToken.js";

export const register = async (req, res,next) => {
  try {
    const user = await createUser(req.body);

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body);

    const token = generateToken(user._id);

    res.json({
      success: true,
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
