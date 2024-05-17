const fs =  require('fs');
console.log("Core MOdules");
fs.writeFileSync("hi.txt","Hello How are you\n you are tryinf fs non cores modul\n and console.log---->console is core module.");
fs.writeFileSync(`Note.txt`,`__dirname----->currunt directory ex(${__dirname} )\n__filename----->current file ex( ${__filename} )`)