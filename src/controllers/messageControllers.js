import { Message } from "../models/messageModel"

const getAllMessage=async(req,res,next)=>{

    try{
      const result=await Message
    }
    catch(err){
        next(err)
    }
    
}