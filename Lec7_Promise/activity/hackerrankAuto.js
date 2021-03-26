const puppeteer = require("puppeteer");
let tab;
let id = "xifov12632@aramidth.com";
let pw = "123456789";

let browserOpenPromise = puppeteer.launch({headless:false,defaultViewport:null,args:["--start-maximized"],slowMo:100});
browserOpenPromise.then(function(browser){
    console.log("Browser Opened !!!");
    let allPagePromise = browser.pages();
    return allPagePromise;
})
.then(function(pages){
    tab = pages[0];
    let pageOpenedPromise = tab.goto("https://www.hackerrank.com/auth/login");
    return pageOpenedPromise;
})
.then(function(){
    let idTypePromise = tab.type("#input-1",id);
    return idTypePromise;
})
.then(function(){
    let pwTypePromise = tab.type("#input-2" , pw);
    return pwTypePromise;
})
.then(function(){
    let loginPromise = tab.click('.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled');
    return loginPromise;
})
.then(function(){
    console.log("logged in to hackerrank !!!");
})
.catch(function (error) {
  console.log(error);
});