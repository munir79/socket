import { MessageService } from "./message.service.js"

const getAllmessageControllers=async(req,res,next)=>{
    try{
     const result=await MessageService.getAllMessageFromDb();

     if(!result){
        return res.status(400).json({
            success:false,
            message:"not find any message"

        })
     }

     res.status(200).json({
        success:false,
        message:"message fetched succesfully",
        data:result
     })
     
    }
    catch(err){
        next(err)
    }
}

export const MessageControllers={getAllmessageControllers}