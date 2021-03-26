const fs = require("fs");
let f1Kadata = fs.promises.readFile("./f1.txt");
let f2Kadata = fs.promises.readFile("./f2.txt");
let f3Kadata = fs.promises.readFile("./f3.txt");
f1Kadata.then(function(data){
    console.log("f1 ka data = "+data);
});
f1Kadata.catch(function(error){
    console.log(error);
});

f2Kadata.then(function(data){
    console.log("f2 ka data = "+data);
});
f2Kadata.catch(function(error){
    console.log(error);
});

f3Kadata.then(function(data){
    console.log("f3 ka data = "+data);
});
f3Kadata.catch(function(error){
    console.log(error);
});
