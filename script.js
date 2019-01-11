var question1 = {
    question: "Which broadway won Best Musical?",
    choices: ["The Band's Visit", "Frozen", "Mean Girls", "SpongeBob SquarePants"],
    answer: "The Band's Visit"
}

var question2 = {
    question: "Which broadway won Best Play?",
    choices: ["The Children", "Farinelli and the King", "Junk", "Harry Potter and the Cursed Child", "Latin History for Morons"],
    answer: "Harry Potter and the Cursed Child"
}

var question3 = {
    question: "Which broadway won Best Revival of a Musical?",
    choices: ["My Fair Lady", "Once On This Island", "Carousel"],
    answer: "My Fair Lady"
}

var question4 = {
    question: "Which broadway won Best Revival of a Play?",
    choices: ["Three Tall Women", "The Iceman Cometh", "Angels in America", "Lobby Hero", "Travesties"],
    answer: "Angels in America"
}

var question5 = {
    question: "Which actor won Best Leading Actor in a Musical?",
    choices: ["Tony Shalhoub - The Band's Visit", "Harry Hadden-Paton - My Fair Lady", "Joshua Henry - Carousel", "Ethan Slater - SpongeBob SquarePants"],
    answer: "Tony Shalhoub - The Band's Visit"
}

var questions = [question1, question2, question3, question4, question5]

var qIndex = 0;
var score = 0;

var questionPageDiv = document.getElementById('question-page');
var scoreDiv = document.getElementById('score');
var questionNumDiv = document.getElementById('question-number');
var questionDiv = document.getElementById('question');
var answersDiv = document.getElementById('answers');
var nextButtonAnc = document.getElementById('next-button');
var enterButtonDiv = document.getElementById("enter-button");

enterButtonDiv.addEventListener("click", function() {
    questionPageDiv.style.height = "300px";
    questionPageDiv.style.transition = ".25s ease-in-out";
})

function askQuestion() {
    questionDiv.innerHTML = questions[qIndex].question;
    questions[qIndex].choices.forEach(choice => {
        var choiceEl = document.createElement("div");
        choiceEl.innerHTML = choice;
        choiceEl.addEventListener('click', function() {
            if (choiceEl.innerHTML === questions[qIndex].answer) {
                console.log("Correct!");
                goToNextQuestion(true);
            } else {
                console.log("Wrong!");
                goToNextQuestion(false);
            }
        })
        answersDiv.appendChild(choiceEl);
    })
};

function goToNextQuestion(prevAnswer) {
    qIndex++;
    if (prevAnswer === true) {
        score++;
    }

    // logic to iterate html to next question.
}

document.addEventListener("DOMContentLoaded", function(event) { 
    askQuestion();
});
