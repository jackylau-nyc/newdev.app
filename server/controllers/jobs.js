import JobListing from '../models/jobListing.js';
import mongoose from 'mongoose';

// No filter, returns all
export const getJobs = async (req, res) => {
    try {
        const jobList = await JobListing.find();
        res.status(200).json(jobList);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
};

// Find by specified job id
export const getJob = async (req, res) => {
    const {jobId} = req.params;
    try {
        const job = await JobListing.findById(jobId);
        res.status(200).json(job);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
};

// Adds single job to db
export const createJob = async (req, res) => {
    const {
        url, 
        title, 
        company, 
        industry, 
        remote, 
        location, 
        requirements,
        languages,
        technologies,
        description,
        datePosted,
        jobViews
    } = req.body;

    const newJob = new JobListing(
        {
            url, 
            title, 
            company, 
            industry, 
            remote, 
            location, 
            requirements,
            languages,
            technologies,
            description,
            datePosted,
            jobViews
        }
    );

    try {
        await newJob.save();
        res.status(201).json(newJob);
    }
    catch (error) {
        res.status(409).json({message: error});
    }
};

// Updates single job by id
export const updateJob = async (req, res) => {
    const {jobId} = req.params;

    const {
        url, 
        title, 
        company, 
        industry, 
        remote, 
        location, 
        requirements,
        languages,
        technologies,
        description,
        datePosted,
        jobViews
    } = req.body;

    try {
        const updatedJob = {
            url, 
            title, 
            company, 
            industry, 
            remote, 
            location, 
            requirements,
            languages,
            technologies,
            description,
            datePosted,
            jobViews,
            _id: jobId
        };

        await JobListing.findByIdAndUpdate(jobId, updatedJob, {new: true});
        res.status(204).json(updatedJob);
    }
    catch (error) {
        if (!mongoose.Types.ObjectId.isValid(jobId)) 
            return res.status(404).send(`No job with id: ${jobId}`);
    }
};

// Deletes job by id from db
export const deleteJob = async (req, res) => {
    const {jobId} = req.params;

    try {
        await JobListing.findByIdAndRemove(jobId);
        res.status(202).json({message: 'Post deleted successfully.'});
    }
    catch (error) {
        if (!mongoose.Types.ObjectId.isValid(jobId)) 
            return res.status(404).send(`No job with id: ${jobId}`);
    }
};