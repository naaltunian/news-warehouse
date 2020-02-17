const fs = require('fs');
const { urls } = require("../index");

function createDirectories() {
    const baseDirectory = `${__dirname}/../newspapers`;
    if(!fs.existsSync(baseDirectory)) {
        fs.mkdirSync(baseDirectory);
    }
    for(let directory of urls) {
        let site = directory.split("//www.")[1];
        let path = `${__dirname}/../newspapers/${site}`;
        if(!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
    }
    process.exit();
}

createDirectories();