const fs = require('fs');

// 1. WRITE
fs.writeFileSync('shreya.txt', 'Hello my name is shreya', 'utf-8');

// 2. READ
const read = fs.readFileSync('shreya.txt', 'utf-8');
console.log('File is written successfully');

// 3. UPDATE / APPEND
fs.appendFileSync('shreya.txt', ' and I am learning Node.js', 'utf-8');

const data = fs.readFileSync('shreya.txt', 'utf-8');
console.log('3. UPDATE:', data);

console.log(read);

// 4. CHECK IF FILE EXISTS
if (fs.existsSync('shreya.txt')) {
    console.log('file exist');
} else {
    console.log('file not');
}

// 5. ASYNCHRONOUS WRITE
fs.writeFile('sample.txt', 'Hello my name is shreya', 'utf-8', (err) => {
    if (err) {
        console.error('Error occurred while writing file:', err);
    } else {
        console.log('File written successfully');
    }
});

// 6. ASYNCHRONOUS READ
fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Error occurred while reading file:', err);
        return;
    }

    console.log('File data:', data);
});