
import { MessageSerive } from "./message.service.js";

export const createMessageControllers=async(req,res,next)=>{
    try{
       const {conversationId,content}=req.body;

       const sender=req.user._id;

       if(!conversationId || !content){
        return res.status(400).json({
            success:false,
            message:" conversation and content are required"
        })
       };


       const message=await MessageSerive.createMesasgeInDb({
        conversationId,sender,content
       });


       res.status(201).json({
        success:true,
        message:'messagfe send successfully',
        data:message
       })

    }
    catch(err){
        next(err)
    }
}

const getMessageControlleers=async(req,res,next)=>{
    try{
     const {conversationId}=req.params;
      console.log("cnv",conversationId);

     if(!conversationId){
        return res.status(400).json({
            success:false,
            message:'conversation id is required'
        })
     }

     const message=await MessageSerive.getMessage(conversationId);
     console.log("message from get msg controllers",message);
     
     res.status(201).json({
        success:true,
        message:"message  fetched succesfully",
        data:message
     })
    }
    catch(err){
        next(err);
    }
}


export const MessageControllers={createMessageControllers,getMessageControlleers}























