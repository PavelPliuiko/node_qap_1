// Description: The fs module allows interaction with the file system, enabling reading, writing, and managing files.
// This is crucial for applications that need to store and retrieve data.

// Importing the fs module
const fs = require('fs');

// Writing a file
fs.writeFile('example.txt', 'Hello, Node.js!', (err) => {
    if (err) throw err;
    console.log('File has been written.');
    // Reading the file
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(`File content: ${data}`);
        // Deleting the file
        fs.unlink('example.txt', (err) => {
            if (err) throw err;
            console.log('File has been deleted.');
        });
    });
});