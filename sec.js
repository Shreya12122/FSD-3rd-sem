const fs = require('fs');

// WRITE
fs.writeFileSync('shreya.txt', 'Hello my name is shreya', 'utf-8');

const read = fs.readFileSync('shreya.txt', 'utf-8');

console.log('File is written successfully');

// APPEND / UPDATE
fs.appendFileSync('shreya.txt', ' and I am learning Node.js', 'utf-8');

const data = fs.readFileSync('shreya.txt', 'utf-8');

console.log('3. UPDATE:', data);
console.log(read);

// CHECK FILE EXISTS
if (fs.existsSync('shreya.txt')) {
    console.log('File exists');
} else {
    console.log('File does not exist');
}

// ASYNCHRONOUS WRITE
fs.writeFile('sample.txt', 'Hello my name is shreya', 'utf-8', (err) => {

    if (err) {
        console.error('Error occurred while writing file:', err);
    } else {
        console.log('File written successfully');
    }

});

// ASYNCHRONOUS READ
fs.readFile('sample.txt', 'utf-8', (err, data) => {

    if (err) {
        console.error('Error occurred while reading file:', err);
        return;
    }

    console.log('File content:', data);

    // DELETE
    fs.unlink('sample.txt', (err) => {

        if (err) {
            console.error('Error occurred while deleting file:', err);
        } else {
            console.log('File deleted successfully');
        }

    });

});