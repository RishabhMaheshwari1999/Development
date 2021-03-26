const fs = require("fs");
let f1Kadata = fs.promises.readFile("./f1.txt");

f1Kadata.then(function(data){
    console.log("f1 ka data = "+data);
    let f2Kadata = fs.promises.readFile("./f2.txt");
    f2Kadata.then(function(data){
        console.log("f2 ka data = "+data)
        let f3Kadata = fs.promises.readFile("./f3.txt");
        f3Kadata.then(function(data){
            console.log("f3 ka data = "+data)
        })
    })
})