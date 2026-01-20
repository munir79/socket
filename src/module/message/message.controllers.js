import { MessageServie } from "./message.service.js";

const sendMessageControllers=async(req,res,next)=>{
    try{
     const sender=req.user.userId;
     const {receiver,content}=req.body;

     const message=await MessageServie.createMessage({sender,receiver,content});
     res.status(201).json({
        success:true,
        mesage:'message send successfully',
        data:message

     })
    }
    catch(err){
        next(err)
    }
}

const getMessageControllers=async(req,res,next)=>{
    try{
    const userId=req.user.userId;;
    const {otherUserId}=req.params;
    
    const message=await MessageServie.getUserMessage(userId,otherUserId);

       res.status(201).json({
        success:true,
        mesage:'message frtched  successfully',
        data:message

     })
    }
    catch(err){
        next(err)
    }
}

export const messageControllers={sendMessageControllers,getMessageControllers}