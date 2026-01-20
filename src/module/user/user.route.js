import express from "express";
import { AuthControllers } from "./user.controllers.js";

const router = express.Router();

router.post("/register", AuthControllers.registerUserControllers);
router.post("/login",AuthControllers.loginControllers);

export const AuthRouter=router;