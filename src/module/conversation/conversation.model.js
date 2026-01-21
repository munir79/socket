import mongoose  from "mongoose";

const ConversationSchema=new mongoose.Schema({
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    lastMessage:{type:String}
},{
    timestamps:true
});


// export const Conversation =mongoose.model("Conversation",ConversationSchema);
export const Conversation=mongoose.model("Conversation",ConversationSchema)
