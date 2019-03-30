// Setting up conditions for my answers
$(document).ready(function () {
    var output = [
        {
            Question: " What year did Ghana get independence?",
            Choice: ["1945", "1967", "1957", "1947",],
            Ans: 2,
        },

        {
            Question: "All time top scorer in African Cup of Nations is........",
            Choice: ["Asamoah Gyan", "Samuel Etoo", "Didier Drogba", "Mohamnmed Salah"],
            Ans: 1,
        },

        {
            Question: "Which country has won the most African Cup of Nations titles?",
            Choice: ["Ghana", "Nigeria", "Cameroon", "Egypt"],
            Ans: 3,
        },

        {
            Question: " What country hosted the 2017 African cup of Nations?",
            Choice: ["Gabon", "Zambia", "Ghana", "Egypt"],
            Ans: 0,
        },

        {
            Question: "What country is the highest producer of gold in Africa?",
            Choice: ["Ghana", "South Africa", "Nigeria", "Togo"],
            Ans: 1,
        }];

        var correctAns = 0;
        var wrongAns = 0;
        var unAnsd = 0;
        var timer = 30;
        var intervalId;
        var userGuess = "";
        var running = false;
        var NumQuestion = output.length;
        var index =  Math.floor(Math.random() * NumQuestion);
        var pick = output[index];
        var newArray = [];
        var holder = [];

    
    
    //starting the timer
    function runTimer() {
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

    //timer stop
    function stop() {
        running = false;
        clearInterval(intervalId);
    }

    function showQuestion() {
        index = Math.floor(Math.random() * NumQuestion);
        pick = output[index];

        $("#question_plate").html("<h2>" + pick.Question + "</h2>");

        for (var i = 0; i < pick.Choice.length; i++) {
            var userselect = $("<div>");
            userselect.addClass("answerchoice");
            userselect.html(pick.Choice[i]);
            //assign array position to it so can check answer
            userselect.attr("user_data", i);
            $("#answer_plate").append(userselect);
        }
    }

    //click to start game
    $("#start").on("click", function () {
        $("#start").hide();
        $("#reset").hide();
        showQuestion();
        makeOnClick();
        runTimer();
        
   
        for (var i = 0; i < output.length; i++) {
            holder.push(output[i]);
        }
    });
    

    //countdown of the timer
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer--;

        //stop timer when 0
        if (timer === 0) {
            unAnsd++;
            stop();
            $("#answer_plate").html("<p>Time is up! The correct answer is: " + pick.Choice[pick.Ans] + "</p>");

        }
    }


   
function makeOnClick(){

    
    $(".answerchoice").on("click", function () {
        //pick array position from userGuess
        console.log("answerchoice");
        userGuess = parseInt($(this).attr("user_data"));
        //outcomes results
        if (userGuess === pick.answer) {
            stop();
            correctAns++;
            userGuess = "";
            $("#answer_plate").html("<p>Correct!</p>");
            
            
        } else {
            stop();
            wrongAns++;
            userGuess = "";
            $("#answer_plate").html("<p>Wrong! The correct answer is: " + pick.Choice[pick.Ans] + "</p>");
            
        }
    })
}


});
