const fs = require('fs');
const path = require('path');
const { urls } = require("./index");

function deletePDFs() {
    for(let url of urls) {
        let site = url.split("//www.")[1];
        let directory = `${__dirname}/newspapers/${site}/`
        fs.readdir(directory, (err, files) => {
            if (err) throw err;
            for (let file of files) {
                fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                    process.exit();
                })
            }
        })
    }
}

deletePDFs();