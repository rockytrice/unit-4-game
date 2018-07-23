 $(document).ready(function () {


     // tracks the score input
     var score = 0;
     $("#userscore").text(score);
     console.log("user score is " + score);
     // tracks the wins
     var wins = 0;
     $("#wins").text(wins);
     //  tracks the losses
     var losses = 0;
     $("#losses").text(losses);




    var numberChoices = [1,2,3,4,5,6,7,8,9,10,11,12];

     // target number randomly selects a number between 120 and 19
     var targetNumber = [Math.floor(Math.random() * 101) + 19];
     console.log("target number is " + targetNumber);
     // setting this h1 to match the targetNumber which will allow me to change the HTML to match the value of the targetnumber in javascript.
     $("#targetscore").text(targetNumber);

     var numberChoices = [Math.floor(Math.random() * 12) +  1];
     for (var i = 0; i < numberChoices.length; i++) {




        




     }
     $(".magenta-crystal").on("click", (function(){
        var crystalValue =($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        $("#userscore").text(score);
        console.log("user score is " + numberChoices);
     }));






 });