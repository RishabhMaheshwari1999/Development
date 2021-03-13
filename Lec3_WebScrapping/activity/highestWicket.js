const request = require("request");
const cheerio = require("cheerio");
let highestTaker = {};
let highestWicketTaker = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard"
request(highestWicketTaker,cb);
function cb(error, response, body){
    parseBody(body);
}

function parseBody(html){
    // console.log("in parse")
    let highestWicketSoFar = 0;
    let nameofhighest;
    let economy;
    let ch = cheerio.load(html);
    let bothbolwingTables = ch('.Collapsible .table.bowler');
    // { 0:{},1:{}}
    for(let i = 0 ; i<bothbolwingTables.length ; i++){
        // console.log("hii in i")
        let bowlingTable = bothbolwingTables[`${i}`];
        let allTr = ch(bowlingTable).find("tbody tr");
        for(let j = 0; j<allTr.length; j++){
            // console.log("inj loop")
            let allTds = ch(allTr[j]).find("td");
            let wickettaker = ch(allTds['4']).text();
            if(wickettaker>highestWicketSoFar){
                // console.log("HII")
                highestWicketSoFar = wickettaker;
                nameofhighest = ch(allTds['0']).text();
                economy = ch(allTds['5']).text();
            }
        }
    }
    highestTaker.name = nameofhighest;
    highestTaker.wickets = highestWicketSoFar;
    highestTaker.economy = economy;
    console.log(highestTaker);

}

// const cheerio =  require("cheerio");
// const request = require("request");
// const fs = require("fs");

// // name:"" ,
// // wickets:"" ,
// // economy:""

// let highestWickerTaker = {};

// request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/kolkata-knight-riders-vs-rajasthan-royals-54th-match-1216530/full-scorecard" , cb);

// function cb(error , response , data){
//     parseData(data);
// }


// function parseData(html){
//     let highestWicketsSoFar = 0;
//     let nameOfHighestWicketTaker;
//     let economy;

//     let ch= cheerio.load(html);
//     let bothBowlingTables = ch('.Collapsible .table.bowler');
//     // {  '0' :{} , '1' :{}  }
//     for(let i=0 ; i<bothBowlingTables.length ; i++){
//         let bowlingTable = bothBowlingTables[`${i}`];
//         let allTrs = ch(bowlingTable).find("tbody tr");
//         // { 0: tr , 1:tr , 2:tr, 3:tr, 4:tr, 5:tr }
//         for(let j=0 ; j<allTrs.length ; j++){
//             let allTds = ch(allTrs[j]).find("td");
//             let wicketsTaken = ch(allTds['4']).text();
//             if(wicketsTaken > highestWicketsSoFar){
//                 highestWicketsSoFar = wicketsTaken;
//                 nameOfHighestWicketTaker = ch(allTds['0']).text();
//                 economy = ch(allTds['5']).text();
//             }
//             // 0=> name  // 4=>wickets  // 5=>eco
//         }
//     }
//     highestWickerTaker.name = nameOfHighestWicketTaker;
//     highestWickerTaker.wickets = highestWicketsSoFar;
//     highestWickerTaker.economy = economy;   
//     console.log(highestWickerTaker);
// }
