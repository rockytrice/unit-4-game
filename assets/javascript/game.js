 var score = 0;
 $("#userscore").text(score);
 console.log("score");

 var wins = 0;
 $("#wins").text(wins);

 var losses = 0;
 $("#losses").text(losses);


 function wins() {
     wins++;
     $("#wins").text(wins);
     console.log("you have " + wins);
 }

 function losses() {
     losses--;
     $("#losses").text(losses);
     console.log("you have " + losses);

 }

 

 // target number randomly selects a number between 120 and 19
 var targetNumber = [Math.floor(Math.random() * 101) + 19];
 console.log("target number is " + targetNumber);
 // setting this h1 to match the targetNumber which will allow me to change the HTML to match the value of the targetnumber in javascript.
 $("#targetscore").text(targetNumber);


 var numberChoices = [Math.floor(Math.random() * 12) + 1];

     for(var i = 0; i < numberChoices.length; i++){
         var imageCrystal = $("<img>");

         imageCrystal.addClass("magenta-crystal");
        //  imageCrystal.addClass("pink-crystal");
        //  imageCrystal.attr("src", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/pink_crystal-512.png");

        imageCrystal.attr("src", "https://cdn1.iconfinder.com/data/icons/crystal-1/60/magenta_crystal-512.png");

        imageCrystal.attr("data-crystalvalue", numberChoices[i]);
        $("#selectors").prepend(imageCrystal);



     }



     $(".magenta-crystal").on("click", function () {
         
        

     });