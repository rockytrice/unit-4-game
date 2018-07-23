 $(document).ready(function () {


             // tracks the score input
             var score = 0;
             $("#userscore").text(score);
             console.log("score");
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


             var numberChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
             var increment = [Math.floor(Math.random() * 12) + 1];
             for (var i = 0; i < numberChoices.length; i++) {




                 //     var magentaCrystal = $(".magenta-crystal");
                 //     var pinkCrystal = $(".pink-crystal");
                 //     var purpalCrystal = $(".purple-crystal");
                 //     var blueCrystal = $("blue-crystal");

                 // var imageCrystal = $("<img>");

                 // imageCrystal.addClass("crystal-image");



                 //  imageCrystal.attr("src", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/magenta_crystal-512.png");
                 //  imageCrystal.attr("data-crystalvalue", numberChoices[i]);

                 //  $("#selectors").append(imageCrystal);

                 //  pinkCrystal.attr("src", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/pink_crystal-512.png");
                 //  pinkCrystal.attr("data-value", numberChoices);

             };


            });