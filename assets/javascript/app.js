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
        }],

   /* var correctAns = 0;
    var wrongAns = 0;
    var unAnsd = 0;
    var timer = 5;
    var intervalId;
    var userGuess = "";
    var running = false;
    var NumQuestion = output.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    */

    $("#reset").hide();

    //click to start game
    $("#start").on("click", function () {
        $("#start").hide();
      //  showQuestion();
       // runTimer();
        //for (var i = 0; i < output.length; i++) {
           // holder.push(output[i]);
        //}
    });
    
    });
