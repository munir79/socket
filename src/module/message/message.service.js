import { Message } from "./message.model.js"


const getAllMessageFromDb=async()=>{
 const result=await Message.find();
 return result;

}

export const MessageService={getAllMessageFromDb}