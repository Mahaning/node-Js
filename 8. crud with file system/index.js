const fs = require('fs');
const path = require('path');
const filepath=`${__dirname}/demo.txt`;
const dirpath = path.join(__dirname, 'file');

// fs.writeFileSync(`${__dirname}/demo.txt`,"this is a simple text");

// fs.readFileSync(`${__dirname}/demo.txt`,(err,item)=>{
//     console.log(item);
// });

// fs.appendFile(filepath,'and file is appended',(err)=>{
//     if(!err) console.log("updated or appended");
// });

// fs.rename(filepath,`${dirpath}/fruits.txt`,(err)=>{
//     if(!err) console.log("Renamed");
// });

fs.unlinkSync(filepath);