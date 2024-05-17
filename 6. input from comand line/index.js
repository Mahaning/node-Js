// console.log(process.argv[2]) //argv--->argument vector
//run node file.js arguments

const fs= require('fs');

const input=process.argv;
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]); //run node filename.js add filenexm.txt 'message'
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]) //run node filename.js remove filenexm.txt 
}
else{

console.log("invalid input")
}