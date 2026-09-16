const fs = require("fs").promises;

async function writeFile() {
    try {
        await fs.writeFile('shreya.txt', 'Hello my name is shreya', 'utf-8');
        console.log('File written successfully');
    } catch (error) {
        console.log("Error:", error);
    }
}

writeFile();

async function readFile() {
    try {
        const data = await fs.readFile('shreya.txt', 'utf-8');
        console.log("File content:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}
readFile(); 
