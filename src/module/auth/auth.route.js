import express from 'express';
import { AuthControllers } from './auth.controllers.js';
const  router=express.Router();

router.post("/sign-up",AuthControllers.registarUserControllers);
router.post("/sign-in",AuthControllers.LogInUSerControllers);


export const AuthRouter=router;
