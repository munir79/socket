import { AuthService } from "./auth.service.js";


export const registarUserControllers=async(req,res,next)=>{
    try{
        const payLoad=req.body;
        console.log(" auth ",payLoad);
        const result=await AuthService.registarUser(payLoad);
        res.status(200).json({
            success:true,
            mesage:"user created Successfully",
            data:result
        })

    }
    catch(err){
        next(err);
    }
}


//log in user controllers

const LogInUSerControllers=async(req,res,next)=>{
    try{
        const payLoad=req.body;
        console.log(" from log in",payLoad);
        const result=await AuthService.LogInUser(payLoad);
        res.status(200).json({
            success:true,
            message:"User Log In Succcessfully",
            data:result
        })

    }
    catch(err){
        next(err);
    }
}


export const AuthControllers={registarUserControllers,LogInUSerControllers}