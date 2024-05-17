const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname, 'file');



// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(`${dirpath}/demo${i}.txt`, `file ${i} is created`);
// }


fs.readdir(dirpath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(element => {
        console.log("file name is:", element);
    });
});