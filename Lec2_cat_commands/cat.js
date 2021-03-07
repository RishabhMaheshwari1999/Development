let fs = require("fs");
let content = process.argv.slice(2);

let flags = [];
let files = [];

for(let i = 0 ; i<content.length ; i++){
    // '-s'
    if(content[i].startsWith('-')){// startswith is strings built in function
        flags.push(content[i]);
    }
    else{
        files.push(content[i]);
    }
}

// console.log(flags);
// console.log(files);
// flags X

for(let i = 0 ; i<content.length ; i++){
    let fileda = fs.readFileSync(files[i]);
    console.log(fileda+"");
}


// for getting data line to line means hello Guys , i am f1hello friends ....
// for files output
let fileKaData = "";
for(let i=0 ; i<files.length ; i++){
    // f1.txt => f2.txt
    fileKaData += fs.readFileSync( files[i] ) + "";
}

console.log(fileKaData);