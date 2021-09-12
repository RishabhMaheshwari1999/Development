// https://github.com/Jasbir96/Batches/tree/main/PP-Batch-1
// npm init -y
// npm i express
// npm i nodemon -g

const express = require("express"); // server init means that its created

// Server  : // route -> request -> response

const app = express();

app.use(express.json()) // to accept post data (in the body)

app.get("/",function(req,res){ // this is defualt as on starting 
    console.log("hello from home page");
    res.send("<h1>Hello from Backend</h1>");

})

let user = {
}

// HTTP Method = get, post, patch, delete
// IP Address = Its a unique Address for the computer at that particular area
// Status code = 100 error, 200 , 300 , 400, 500, // search on wikipedia for more info
// Port = Its unique for every machine, basically its a tcp ports that is used for hosting somethings


// giving data to server
// 1 create
app.post("/user",function(req,res){
    console.log("req.body : ", req.body);
    user = req.body;
    res.status(200).send("data received");
})
// getting data from server
// 2 get
app.get("/user",function(req,res){
    console.log("users");
    res.json(user); // for sending key value pairs;
})

// 3 update
app.patch("/user",function(req,res){
    let obj = req.body;
    for(let key in obj){
        user[key] = obj[key];
    }
    res.status(200).json(user);
})

// 4 delete
app.delete("/user",function(req,res){
    user = {}
    res.status(200).json(user);
})

// template routing
app.get("/user/:id",function(req,res){
    console.log(req.params.id);
    res.status(200).send("Hello");
})


app.listen(8080,function(){
    console.log("server started");
})