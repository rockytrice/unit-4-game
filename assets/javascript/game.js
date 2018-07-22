 var score = 0;
$("#userscore").text(score);
 console.log("score");

var wins = 0;
$("#wins").text(wins);
console.log("wins");

var losses = 0;
$("#losses").text(losses);
console.log("losses");


var numberChoices = [Math.floor(Math.random() * 12) + 1];
for (var i = 0; i < numberChoices.length; i++);


// target number randomly selects a number between 120 and 19
var targetNumber = [Math.floor(Math.random() * 102) + 19];
console.log("targetNumber");
// setting this h1 to match the targetNumber which will allow me to change the HTML to match the value of the targetnumber in javascript.
$("#targetscore").text(targetNumber);



$(".magenta-crystal").on("click", function () {
    

});

$(".pink-crystal").on("click", function () {
    
});
 $(".purple-crystal").on("click", function () {
    alert("you clicked me");
 });

 $(".blue-crystal").on("click", function () {
    alert("you clicked me");
 });