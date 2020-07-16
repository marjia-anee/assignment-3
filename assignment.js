
//Number 01 problem: feet To mile conversion

function feetToMile(feet) {
    var Mile = feet * 0.00018939;
    return Mile;

}

var firstMile = feetToMile(5);
console.log(firstMile);

var secondMile = feetToMile(32);
console.log(secondMile);

var thirdMile = feetToMile(158);
console.log(thirdMile);

// 01 problem solved!------------------------



// Number 02 problem: Wood Calculator

function woodCalculator (chair,table,bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;

    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}

var Result = woodCalculator(20, 8, 10);
console.log("Total number of wood is :",Result);


// Problem 02 solved!-----------------------------------



// Number 03 problem : brickCalculator

function brickCalculator(){

}


// Number 04 problem : Finding tiny friend's name

var friends = ['A','Tolu', 'Ab','Samia','Malia', 'Polin','Lamia'];

function tinyFriend(friends){
    var tinyName = friends[0];

    for(var i = 0; i <friends.length; i++){
        var currentName = friends[i];
       if (currentName < tinyName){
           tinyName = currentName;
       }

    }
    return tinyName;

}
var results = tinyFriend(friends);
console.log(results);


// Problem 04 solved!-----------------------------------

