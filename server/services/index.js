import {scrapePages} from './scrapers/index.js';

const serviceRunner = async () => {
    scrapePages();
}

serviceRunner();