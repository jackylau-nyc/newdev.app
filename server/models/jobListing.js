import mongoose from 'mongoose';

const jobSchema = mongoose.Schema({
    id: Number,
    url: String,
    title: String,
    company: String,
    industry: String,
    location: String,
    requirements: String,
    languages: String,
    technologies: String,
    description: String,
    datePosted: Date,
    jobViews: Number
});

let JobListing = mongoose.model('JobListing', jobSchema);

export default JobListing;