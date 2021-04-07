import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    url: String,
    title: String,
    company: String,
    industry: String,
    remote: Boolean,
    location: String,
    requirements: String,
    languages: [String],
    technologies: [String],
    description: String,
    datePosted: {
        type: Date,
        default: new Date()
    },
    jobViews: {
        type: Number,
        default: 0
    }
});

let JobListing = mongoose.model('JobListing', jobSchema);
export default JobListing;