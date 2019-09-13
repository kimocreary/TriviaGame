var counter = 45;
var correctAnswers;
var incorrectAnswers;
var unanswered;
var timer;

function endGame (){

}

function timeUp () {
    clearInterval(timer);
}


function countDown() {
    counter--;
    $('#time').html('Time Remaining: '  + counter);
        if (counter === 0) {
            timeUp();
        }
}

$("#game").hide()
console.log("javascript file")
var quizQuestions = [
    {
        question: "What is the first full length CGI movie?",
        choices: [ "A Bug's Life", "Monsters Inc", "Toy Story", "The Lion King"],
        correctAnswer: "Toy Story"
    },{
        question: "Which of these is Not a name of one of the Spice Girls?",
        choices: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
        correctAnswer: "Fred Spice"
    },{
        question: "Which NBA team won the most titles in the 90's?",
        choices: [ "New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
        correctAnswer: "Chicago Bulls"
    
    }, {
        question: "Which group released the hit song, 'Smells Like Teen Spirit?'",
        choices: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
        correctAnswer: "Nirvana"
    }

    
]
$("#startGame").on("click", function(event) {
    counter = 45;
    timer = setInterval(countDown, 1000);

    event.preventDefault();
    $("#game").show()
    $("#startGame").hide()
    $("#time").html('Time Remaining: '  + counter);

    displayQuestion()
});

var displayQuestion = function() {
    for (var i = 0; i < quizQuestions.length; i++) {
        $("#game").append(`
        <h2 id = "questions">${quizQuestions[i].question}</h2>
            <input type="radio" name="choices${i+1}" value="${quizQuestions[i].choices[0]}"> ${quizQuestions[i].choices[0]}<br>
            <input type="radio" name="choices${i+1}" value="${quizQuestions[i].choices[1]}"> ${quizQuestions[i].choices[1]}<br>
            <input type="radio" name="choices${i+1}" value="${quizQuestions[i].choices[2]}"> ${quizQuestions[i].choices[2]}<br>
            <input type="radio" name="choices${i+1}" value="${quizQuestions[i].choices[3]}"> ${quizQuestions[i].choices[3]}<br>
        
        `)
    }
  $("#game").append(`<br> <button class = "btn-primary" id="answer"> submit answer</button>`)  
}


$(document).on('click', 'choices', function() {
    console.log(youwin);
});
// User clicks the start button

    // Start page disappears
    // Questions and Answers appear
    // Timer starts
// Timer starts
// User answers questions
// When timer reaches zero, game ends
    // Timer goes away
    // Game scores the questions
    // Questions disappear
// Correct answers and wrong answers displayed

 



