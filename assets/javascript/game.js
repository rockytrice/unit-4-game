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


            // target number randomly selects a number between 120 and 19
            var targetNumber = [Math.floor(Math.random() * 101) + 19];
            console.log("target number is " + targetNumber);
            // setting this h1 to match the targetNumber which will allow me to change the HTML to match the value of the targetnumber in javascript.
            $("#targetscore").text(targetNumber);
            // randomly selects numbers 1 -12 for each crystal value and logging to the console.
            var blueCrystalBtn = Math.floor(Math.random() * 11) + 1;
            console.log("bluecrystal value is " + blueCrystalBtn);
            var magentaCrystalBtn = Math.floor(Math.random() * 11) + 1;
            console.log("magentacyrstal value is " + magentaCrystalBtn);
            var pinkCrystalBtn = Math.floor(Math.random() * 11) + 1;
            console.log("pinkcrystal value is " + pinkCrystalBtn);
            var purpleCrystalBtn = Math.floor(Math.random() * 11) + 1;
            console.log("purplecrystal value " + purpleCrystalBtn);








            $("#blue-crystal").on("click", function () {

                $("#userscore").text(score);
                score = score + blueCrystalBtn;
                console.log("blue crystal value is " + blueCrystalBtn);

            });
            if (score === targetNumber) {
                win++;
                $("#wins").text(wins);
                console.log("you have won " + won);
            } 
            $("#pink-crystal").on("click", function () {
                score = score + pinkCrystalBtn;
                $("#userscore").text(score);
                console.log("pink crystal value is " + pinkCrystalBtn);
            }); 

            if(score === targetNumber) {
                win++;
                $("#wins").text(wins);
                console.log("you have won " + won);
            } 


                $("#purple-crystal").on("click", function () {
                    score = score + purpleCrystalBtn;
                    $("#userscore").text(score);
                    console.log("purple crystal value is " + purpleCrystalBtn);

                });
                if(score === targetNumber) {
                    win++;
                    $("#wins").text(wins);
                    console.log("you have won " + won);
                } 


                $("#magenta-crystal").on("click", function () {
                    score = score + magentaCrystalBtn;
                    $("#userscore").text(score);
                    console.log("magenta crystal is " + magentaCrystalBtn);

                });
                if(score === targetNumber) {
                    win++;
                    $("#wins").text(wins);
                    console.log("you have won " + won);
                } 



            });