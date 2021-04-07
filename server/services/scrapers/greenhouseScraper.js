import playwright from 'playwright';
import {getJobs, getJob, createJob, updateJob, deleteJob} from '../../controllers/jobs.js';

export const scraper = async (url) => {

    const browser = await playwright.chromium.launch({
        headless: false
    });
    
    const page = await browser.newPage();
    
    await page.goto(url);
    
    let listedJobs = await page.$$('.level-0');

    console.log(`greenhouse: ${listedJobs.length}`);

    await browser.close();
};