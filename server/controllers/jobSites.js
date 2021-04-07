import JobBoard from '../models/jobBoard.js';
import mongoose from 'mongoose';

// No filter, returns all
export const getJobSites = async (req, res) => {
    try {
        const jobSites = await JobBoard.find();
        res.status(200).json(jobSites);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
};

// Find by specified job board id
export const getJobSite = async (req, res) => {
    const {jobSiteId} = req.params;
    try {
        const jobSite = await JobBoard.findById(jobSiteId);
        res.status(200).json(jobSite);
    }
    catch (error) {
        res.status(404).json({message: error.message});
    }
};

// Adds single job board to db
export const createJobSite = async (req, res) => {
    const {
        url,
        domain
    } = req.body;

    const newJobSite = new JobBoard(
        {
            url,
            domain
        }
    );

    try {
        await newJobSite.save();
        res.status(201).json(newJobSite);
    }
    catch (error) {
        res.status(409).json({message: error});
    }
};

// Updates single job by id
export const updateJobSite = async (req, res) => {
    const {jobSiteId} = req.params;

    const {
        url, 
        domain
    } = req.body;

    try {
        const updatedJobSite = {
            url, 
            domain,
            _id: jobId
        };

        await JobListing.findByIdAndUpdate(jobSiteId, updatedJobSite, {new: true});
        res.status(204).json(updatedJobSite);
    }
    catch (error) {
        if (!mongoose.Types.ObjectId.isValid(jobSiteId)) 
            return res.status(404).send(`No job with id: ${jobSiteId}`);
    }
};

// Deletes job site by id from db
export const deleteJob = async (req, res) => {
    const {jobSiteId} = req.params;

    try {
        await JobBoard.findByIdAndRemove(jobSiteId);
        res.status(202).json({message: 'Post deleted successfully.'});
    }
    catch (error) {
        if (!mongoose.Types.ObjectId.isValid(jobSiteId)) 
            return res.status(404).send(`No job with id: ${jobSiteId}`);
    }
};