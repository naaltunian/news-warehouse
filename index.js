const puppeteer = require("puppeteer");

// add whichever sites you'd like to save here. You'll also need to create subdirectories within the newspapers directory with the name of the site, ex: https://nytimes.com -> nytimes
const urls = ["https://nytimes.com", "https://www.vox.com", "https://arstechnica.com", "https://www.washingtonpost.com"];

const todaysDate = new Date().toLocaleDateString().replace(/\//g, "-");

const path = `${__dirname}/newspapers/nytimes/${todaysDate}.pdf`;
console.log(path)


const nytUrl = "https://nytimes.com"
async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(nytUrl);
    await page.pdf({
        path,
        format: "A4"
    });
    await browser.close();
}

run();