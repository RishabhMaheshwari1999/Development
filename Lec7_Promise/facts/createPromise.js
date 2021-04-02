const fs = require("fs");



function myPromisified(filePath){
    return new Promise(function(resolve,reject){
        fs.readFile(filePath,function(error,data){
            if(error){
                reject(error);
            }
            else{
                resolve(data);
            }
        })
    })
}

let pendingPromisified = myPromisified("./f1.txt");
pendingPromisified.then(function(data){
    console.log(data+"");
})

pendingPromisified.catch(function(error){
    console.log(error);
})
