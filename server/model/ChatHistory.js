import mongoose, { SchemaType } from 'mongoose';
import User from './User';
import moment from 'moment';
const ChatHistory = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User'
    },
    receiverList: [{
        receiver: { type: Schema.Types.ObjectId, ref: 'User' },
        messages: [{
            content: { type: String },
            date: { type: String, default: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss') }
        }]
    }]
})

export default mongoose.model('ChatHistory', ChatHistory)
