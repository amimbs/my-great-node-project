const fs = require('fs').promises;

async function readFile(filePath) {
    try {
        const data = await fs.readfile('C:/Users/andym/Documents/Dev Projects/my-great-node-project/file1.text');
        console.log(data.toString());
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

readFile('file1.text')