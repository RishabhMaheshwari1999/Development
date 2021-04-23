// High Order Functions => Functions which accept functions as a argument !
// Callback Functions => Functions which are passed into a function as a argument !

function getFirstName(fullName){
    // fullName = "TONY STARK".split(" ") => [ "TONY" , "STARK"  ];// here split is used to split the string from the " ".
    fullName = fullName.split(" ");
    return fullName[0];
}

function getLastName(fullName){
    fullName = fullName.split(" ");
    return fullName[1];
}

function sayHi( fullName  , fun  ){
    let name = fun(fullName);
    console.log(name);
}


sayHi("TONY STARK" , getFirstName);
sayHi("BRUCE BANNER" ,  getLastName);
//so the output will be tony banner

//if we make both the function of same name then the last function that have same name it will work .