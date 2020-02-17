const fs = require('fs');
const { urls } = require("../index");

console.log("direc",__dirname)

function createDirectories() {
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