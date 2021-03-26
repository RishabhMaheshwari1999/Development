const puppeteer = require("puppeteer");
// all functions of puppeteer is promisified -> gives you a pending promise initially

//open a new browser instance

let browserOpenedPromise = puppeteer.launch({headless:false});
// Promise < pending >

browserOpenedPromise.then(function(browser){
    console.log("Browser Opened !!!");
    let allPagePromise = browser.pages();
    return allPagePromise;
})
.then(function(pages){
    let tab = pages[0];
    let pageOpenedPromise = tab.goto("https://www.google.com");
    return pageOpenedPromise;
})
.then(function(){
    console.log("google home page opened !!!");
})
.catch(function(error){
    console.log(error);
})