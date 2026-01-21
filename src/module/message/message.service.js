import { Conversation } from "../conversation/conversation.model.js"
import { Message } from "./message.model.js"

const createMesasgeInDb=async({ conversationId, sender, content })=>{
    const message=await Message.create({
       conversationId, sender,content
    })

    await Conversation.findByIdAndUpdate(conversationId,{
        lastMessage:content,
        updatedAt:new Date()
    })

    return message;
}

//get message 

export const getMessage=async(conversationId)=>{
  const result=await  Message.find({conversationId}).sort({ createdAt: 1 });
  return result

}


export const MessageSerive={createMesasgeInDb,getMessage};