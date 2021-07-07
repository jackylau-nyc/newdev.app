import {scraper as greenhouse} from './greenhouseScraper.js';
import {scraper as lever} from './leverScraper.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

// imports from controller here
import {getJobSites} from '../../controllers/jobSites.js';
import JobBoard from '../../models/jobBoard.js';

dotenv.config({path: "../../../.env.local"});

export const scrapePages = async () => {
    await dbConnection();
    // Gets list of sites from db
    let siteList = [];

    await JobBoard.find().then((res) => {
        for(const site of res)
            siteList.push(site)
    });
    
    for(const site of siteList){
        switch(site.domain){
            case('greenhouse'):
                await greenhouse(site.url);
                break;
            case('lever'):
                await lever(site.url);
                break;
            default:
                console.log(`Scraper does not exist for ${site.domain}`);
                break;
        }
    }
};


const dbConnection = async () => {

    await mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .catch((error) => console.log(`${error} did not connect`));

    mongoose.set('useFindAndModify', false);
};