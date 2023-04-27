import mongoose, { SchemaType } from 'mongoose';
import User from './User';

const ChatHistory = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    receiverList: [{
        receiver: { type: Schema.Types.ObjectId, ref: 'User' },
        messages: [{
            content: { type: String },
            date: { type: Date, default: Date.now() }
        }]
    }]
})

export default mongoose.model('ChatHistory', ChatHistory)
