import { Message } from "./message.model.js"

const createMessage=async({sender,receiver,content})=>{

    console.log("from service",sender,receiver,content);
    const message=await Message.create({
        sender,
        receiver,
        content
    });

    return message
}


const getUserMessage=async(userId,otherUserID)=>{
    const  message=await Message.find({
        $or:[
            {sender:userId ,receiver:otherUserID},
            {sender:otherUserID,receiver:userId}
        ]
    }).sort({createdAt:1});

    return message
};


export const MessageServie={createMessage,getUserMessage}