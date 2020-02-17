const puppeteer = require("puppeteer");
// /Users/nicholasaltunian/Desktop/programming/projects/screen-grab/screenshots

const nytUrl = "https://nytimes.com";
const path = "/Users/nicholasaltunian/Desktop/programming/projects/screen-grab/screenshots/nyt.png"


async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(nytUrl);
    await page.screenshot({
        path
    });
    browser.close();
}

run();