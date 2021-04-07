import mongoose from 'mongoose';

const supportedList = ['greenhouse', 'lever'];

const jobBoardSchema = mongoose.Schema({
    url: String,
    domain: {
        type: String, 
        enum: supportedList
    }
});

let JobBoard = mongoose.model('JobBoard', jobBoardSchema);
export default JobBoard;