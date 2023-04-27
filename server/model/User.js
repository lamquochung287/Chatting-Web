import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: {
        type: 'String',
        required: [true, 'Please provide username'],
        unique: true,
    },
    password: {
        type: 'String',
        minLength: [6, 'Password must at least be at least 6 characters']
    },
    email: {
        type: 'String',
        unique: true
    },
    friendList: [
        {
            friendName: String,
        }],
    chatHistory: [
        {
            receiver: String,
            messages: [{
                content: String,
                date: { type: Date, default: Date.now() },
            }],
        }
    ]
})

UserSchema.methods.comparePassword = async function (inputPassword) {
    const isMatch = await bcrypt.compare(inputPassword, this.password);

    return isMatch;
};

UserSchema.pre('save', async function () {
    if (!this.isModified('password')) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model('User', UserSchema)

