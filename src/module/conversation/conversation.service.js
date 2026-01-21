import { Conversation } from "./conversation.model.js"


const getOrCrateConversation=async(userA,userB)=>
    
    {

    let conversation= await Conversation.findOne({
        members:{$all:[userA,userB]}
    });

    if(!conversation){
       conversation= await Conversation.create({
        members:[userA,userB]
       }) 
    };
    return conversation;
};


 const getUserConversation=async(userId)=>{

    const result=await Conversation.find({
        members:userId
    }).sort({ updatedAt: -1 })

    return result;
 }


export const ConversationService={getOrCrateConversation,getUserConversation}

