import generateToken from "../../utils/generatedToken.js";
import { UserService } from "./user.service.js";

export const registerUserControllers = async (req, res,next) => {
  try {
    const user = await UserService.createUserSerVice(req.body);

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message:'user created successfully ',
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    // res.status(400).json({ success: false, message: error.message });
    next(error)
  }
};

export const loginControllers = async (req, res) => {
  try {
    const user = await UserService.loginUserService(req.body);

    const token = generateToken(user._id);

    res.json({
      success: true,
      message:"user log in successfully",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    // res.status(400).json({ success: false, message: error.message });
    next(error)
  }
};


export const AuthControllers={registerUserControllers,loginControllers}
