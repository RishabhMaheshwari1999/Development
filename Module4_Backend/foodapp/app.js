// npm init -y
// npm i express

const express = require("express"); // server init means that its created

// Server  : // route -> request -> response

const app = express();

app.get("/",function(req,res){ // this is defualt as on starting 
    console.log("hello from home page");
    res.send("<h1>Hello from Backend</h1>");

})

let obj = {
    name : "rishabh"
}

app.get("/user",function(req,res){
    console.log("users");
    res.json(obj); // for sending key value pairs;
})

app.listen(8080,function(){
    console.log("server started");
})