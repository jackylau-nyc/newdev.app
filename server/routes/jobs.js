import express from 'express';

// imports from controller here
import {getJobs, getJob, createJob, updateJob, deleteJob} from '../controllers/jobs.js';

const router = express.Router();

// router assignments here
router.get('/', getJobs);
router.post('/', createJob);
router.get('/:id', getJob);
router.patch('/:id', updateJob);
router.delete('/:id', deleteJob);

export default router;