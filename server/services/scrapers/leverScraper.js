import playwright from 'playwright';

export const scraper = async (url) => {

    const browser = await playwright.chromium.launch({
        headless: false
    });
    
    const page = await browser.newPage();
    
    await page.goto(url);
    
    let listedJobs = await page.$$('.posting')

    console.log(`lever: ${listedJobs.length}`);

    await browser.close();
};