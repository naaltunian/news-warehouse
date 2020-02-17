const puppeteer = require("puppeteer");

// add whichever sites you'd like to save here with the prefix www. in order for the split to work correctly. You'll also need to create subdirectories within the newspapers directory with the name of the site, ex: https://nytimes.com -> nytimes.com, https://www.washingtonpost.com -> washingtonpost.com
const urls = ["https://www.nytimes.com", "https://www.vox.com", "https://www.arstechnica.com", "https://www.washingtonpost.com"];

const todaysDate = new Date().toLocaleDateString().replace(/\//g, "-");

async function run() {
    const browser = await puppeteer.launch();

    for(let url of urls) {
        let site = url.split("//www.")[1];
        let path = `${__dirname}/newspapers/${site}/${todaysDate}.pdf`
        await savePDF(browser, url, path)
    }
    await browser.close();
}

async function savePDF(browser, url, path) {
    const page = await browser.newPage();
    await page.goto(url, {
        waitUntil: 'load',
        timeout: 0
    });
    await page.pdf({
        path,
        format: "A4"
    });
}

run();