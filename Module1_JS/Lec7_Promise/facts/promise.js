const fs = require("fs");

// b gets the pending promise    // A-> initially returns a pending promise 
            let pendingPromise = fs.promises.readFile("./f1.txt");
console.log(pendingPromise);

// pendingPromise -> promise object whose state is pending!!

// success callback -> scb is attached to pending Promise
pendingPromise.then(function(data){
    console.log("Inside then ka callback i.e SCB");
    console.log(data+"");
    console.log(pendingPromise); // when it returns buffer with some data values it means that its similar to data
});
// failure callback -> fcb is attached to pending promise
pendingPromise.catch(function(error){
    console.log("Inside then ka callback i.e FCB");
    console.log(error);
    console.log(pendingPromise);
})
