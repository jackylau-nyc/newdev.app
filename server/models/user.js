import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: Number,
    fullname: String,
    title: String,
    password: String,
    email: String,
    lastLogin: String,
    history: String,
});

let User = mongoose.model('User', userSchema);

export default User;