import mongoose from 'mongoose';
import { type } from 'os';

const messageSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },

    receiver:{
       type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    room:{
      type:String,
      default:null
    }
  },
  {
    timestamps: true,
  }
);

export const Message = mongoose.model('Message', messageSchema);
