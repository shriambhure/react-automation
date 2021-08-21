const https = require('https');
const fs = require('fs');
const path = require('path');
const extract = require('extract-zip');

const url = process.argv[2]; //https://aprasad-entrata-textract.s3.amazonaws.com/Allure.zip
const extractPath = path.resolve(__dirname,'../node_modules/allure-report');

if (!fs.existsSync(extractPath)) {
    fs.mkdirSync(extractPath,{
        recursive:true
    });
    console.log("Directory Created Successfully!");
}else{
    fs.rmdirSync(extractPath,{
        recursive :true
    });
    console.log("Existing Directory Deleted Successfully!");
    fs.mkdirSync(extractPath, {
        recursive: true
    });
}
if (url) {
    const fileWithExt = path.basename(url);
    https.get(url,(res) => {
        const outputLocation = path.resolve(`${extractPath}/${fileWithExt}`);
        const filePath = fs.createWriteStream(outputLocation);
        res.pipe(filePath);
        filePath.on('finish',() => {
            console.log('Download Completed');
            const dir = path.resolve(`${extractPath}`);
            extract(path.resolve(`${extractPath}/${fileWithExt}`), {dir}, function(err) {
                if (err) {
                    console.error('Can not unzip the file', err);
                    filePath.close();
                }
            })
        })
    })
}
