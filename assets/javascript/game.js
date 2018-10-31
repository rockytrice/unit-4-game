$(document).ready(function () {



    // tracks the score input
    var score = 0;
    $("#userscore").text(score);
    // console.log("user score is " + score);
    // tracks the wins
    var wins = 0;
    $("#wins").text(wins);
    //  tracks the losses
    var losses = 0;
    $("#losses").text(losses);

    // target number randomly selects a number between 12 and 19
    var targetNumber = [Math.floor(Math.random() * 101) + 19];
    // console.log("target number is " + targetNumber);
    // setting this h1 to match the targetNumber which will allow me to change the HTML to match the value of the targetnumber in javascript.
    $("#targetscore").text(targetNumber);
    // randomly selects numbers 1 -12 for each crystal value and logging to the console.
    var blueCrystalBtn = Math.floor(Math.random() * 12) + 1;
    // console.log("bluecrystal value is " + blueCrystalBtn);
    var magentaCrystalBtn = Math.floor(Math.random() * 12) + 1;
    // console.log("magentacyrstal value is " + magentaCrystalBtn);
    var pinkCrystalBtn = Math.floor(Math.random() * 12) + 1;
    // console.log("pinkcrystal value is " + pinkCrystalBtn);
    var redCrystalBtn = Math.floor(Math.random() * 12) + 1;
    // console.log("redcrystal value is " + redCrystalBtn);


    // on the click of the blue crystal a value is generated and is added to the overall score
    $("#blue-crystal").on("click", function () {
        score = parseInt(score) + parseInt(blueCrystalBtn);
        $("#userscore").text(score);
        // console.log(score);
        // if the user score and targetnumber are equal. you win
        if (score === targetNumber) {
            wins++;
            $("#wins").text(wins);
            // console.log("you win");
            reset();

        }
        

        // if the score is larger than the targetnumber you lose.
        if (score > targetNumber) {
            losses++;
            $("#losses").text(losses);
            // console.log("you lose");
            reset();

        }

    });
    // same concept of the previous on click button
    $("#pink-crystal").on("click", function () {
        //  parses a string and returns an integer
        score = parseInt(score) + parseInt(pinkCrystalBtn);
        $("#userscore").text(score);
        // logs the score to the console
        // console.log(score);
        if (parseInt(score) === parseInt(targetNumber)) {
            wins++;
            $("#wins").text(wins);
            // console.log("you win");
            reset();
        }
        // if the score is larger than the targetnumber you lose and the losses on the page go up by 1.
        else if (score > targetNumber) {
            losses++;
            $("#losses").text(losses);
            // console.log("you lose");
            reset();

        }

    });
    // same concept of the previous on click button

    $("#red-crystal").on("click", function () {
        score = parseInt(score) + parseInt(redCrystalBtn);
        $("#userscore").text(score);
        // console.log(score);

        if (parseInt(score) === parseInt(targetNumber)) {
            wins++;
            $("#wins").text(wins);
            // console.log("you win");
            reset();
        }

        // if the score is larger than the targetnumber you lose and the losses on the page go up by 1.
        else if (score > targetNumber) {
            losses++;
            $("#losses").text(losses);

            // console.log("you lose");
            reset();

        }


    });

    // same concept of the previous on click button

    $("#magenta-crystal").on("click", function () {
        score = parseInt(score) + parseInt(magentaCrystalBtn);;
        $("#userscore").text(score);
        // console.log(score);

        if (parseInt(score) === parseInt(targetNumber)) {
            wins++;
            $("#wins").text(wins);
            // logs you win to the console
            // console.log("you win");
            reset();
        }

        // if the score is larger than the targetnumber you lose and the losses on the page go up by 1.
        else if (score > targetNumber) {
            $("#losses").text(losses);
            losses++;
            $("#losses").text(losses);
            // logs you lose to the console
            // console.log("you lose");
            reset();
        }

    });




    //  this function resets the value of the target number, score, and the crystal values.

    function reset() {
        score = 0;
        $("#userscore").text(score);
        targetNumber = 0;
        targetNumber = Math.floor(Math.random() * 101) + 19;
        $("#targetscore").text(targetNumber);
         blueCrystalBtn = Math.floor(Math.random() * 11) + 1;
        // console.log("new bluecrystal value is " + blueCrystalBtn);
         magentaCrystalBtn = Math.floor(Math.random() * 11) + 1;
        // console.log("new magentacyrstal value is " + magentaCrystalBtn);
         pinkCrystalBtn = Math.floor(Math.random() * 11) + 1;
        // console.log("new pinkcrystal value is " + pinkCrystalBtn);
         redCrystalBtn = Math.floor(Math.random() * 11) + 1;
        // console.log("new purplecrystal value " + redCrystalBtn);
        

    }

});
