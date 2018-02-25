$(document).ready(function () {

    // display the starting value of the user total of 0
    var startValue = 0;
    $("#userScore").html(startValue);

    // display the total wins and losses as 0
    var winTotal = 0;
    $("#wins").html("Wins: " + winTotal);

    var lossTotal = 0;
    $("#losses").html("Losses: " + lossTotal);

    // function to choose a random number between the assigned numbers
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    // pick a random number between 19 and 120
    var goalNumber = randomNumber(19, 120);
    console.log(goalNumber);

    // display that number in the appropriate div on the webpage
    $("#assignedNumber").html(goalNumber);

    // assign a random number between 1 and 12 to each gem
    var purpleNumber = randomNumber(1,12);
    console.log(purpleNumber);
    var greenNumber = randomNumber(1, 12);
    console.log(greenNumber);
    var blueNumber = randomNumber(1, 12);
    console.log(blueNumber);
    var redNumber = randomNumber(1, 12);
    console.log(redNumber);
    // var purpleNumber = $("#purple").attr("value", randomNumber(1,12));
    // var greenNumber = $("#green").attr("value", randomNumber(1, 12));
    // var blueNumber = $("#blue").attr("value", randomNumber(1, 12));
    // var redNumber = $("#red").attr("value", randomNumber(1, 12));

    // reset function

    function reset () {
        startValue = 0
        $("#userScore").html(startValue);
        goalNumber = randomNumber(19, 120);
        $("#assignedNumber").html(goalNumber);
        console.log("New number " + goalNumber);
        purpleNumber = randomNumber(1,12);
        console.log("New purple " + purpleNumber);
        greenNumber = randomNumber(1, 12);
        console.log("New green " + greenNumber);
        blueNumber = randomNumber(1, 12);
        console.log("New blue " + blueNumber);
        redNumber = randomNumber(1, 12);
        console.log("New red " + redNumber);
    }

    // win and lose function

    function winsLosses () {
        if (startValue === goalNumber) {
            $("#message").html("You won!");
          winTotal++;
          $("#wins").html("Wins: " + winTotal);
            reset ();
        }

        else if (startValue > goalNumber) {
            $("#message").html("You lose!");
            lossTotal++;
            $("#losses").html("Losses: " + lossTotal);
            reset ();
        };

    }


    // on click take the value of the number assigned to the gem clicked and add it to the total of the user score
            $("#purple").on("click", function (){
                startValue = startValue + purpleNumber;
                $("#userScore").html(startValue);
                winsLosses();
            });

            $("#green").on("click", function(){
                startValue = startValue + greenNumber;
                $("#userScore").html(startValue);
                winsLosses();
            });

            $("#blue").on("click", function(){
                startValue = startValue + blueNumber;
                $("#userScore").html(startValue);
                winsLosses();
            });

            $("#red").on("click", function(){
                startValue = startValue + redNumber;
                $("#userScore").html(startValue);
                winsLosses();
            });

    });


    // if the total of the user score matches the random number chosen then the user wins and one win gets added to the win total

    // if the total of the user score goes over the random number then user loses and one loss gets added to the loss total

    // once either a win or loss occurs then the game resets, picking a new random number and assigning new values to each gem


