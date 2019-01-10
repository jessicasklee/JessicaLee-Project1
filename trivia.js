enterButton.addEventListener('click', function(e) {
    e.preventDefault();
    displayScore();
    displayQuestion();
});

var questionNumber = document.querySelector(".question-number");
var quizButton = document.querySelector("#enter-button");
var nextButton = document.querySelector(".next-button");
var answers = document.querySelector(".answers");
var score = document.querySelector('#score');
var questionPage = document.querySelector(".question-page");
var trivia = undefined;

class question {
    constructor(question, playerAnswer, answer)
    this.question = question;
    this.playerAnswer = playerAnswer;
    this.answer = answer;
}

function Question() {
    document.getElementById("question-number")
    document.getElementById("question")
    document.getElementById("answers")
    document.getElementByClassName("next-button")
}

var triviaQuestions = [
    new Question('Which broadway won Best Musical?',
    ["The Band's Visit", "Frozen",  "Mean Girls", "SpongeBob SquarePants"], "The Band's Visit"),
    new Question('Which broadway won Best Play?',
     ["The Children", "Farinelli and the King", "Junk", "Harry Potter and the Cursed Child", "Latin History for Morons"], "Harry Potter and the Cursed Child"),
    new Question('Which broadway won Best Revival of a Musical?',
     ["My Fair Lady", "Once On This Island", "Carousel"], "My Fair Lady"),
    new Question('Which broadway won Best Revival of a Play?',
    ["Three Tall Women", "The Iceman Cometh", "Angels in America", "Lobby Hero", "Travesties"], "Angels in America"),
    new Question('Which actor won Best Leading Actor in a Musical?',
    ["Tony Shalhoub - The Band's Visit", "Harry Hadden-Paton - My Fair Lady", "Joshua Henry - Carousel", "Ethan Slater - SpongeBob SquarePants"], "Tony Shalhoub - The Band's Visit"),
    new Question('Which actress won Best Leading Actress in a Musical?',
    ["Jessie Mueller - Carousel", "Taylor Louderman - Mean Girls", "LaChanze - Summer: The Donna Summer Musical", "Hailey Kilgore - Once On This Island", "Katrina Lenk - The Band's Visit", "Lauren Ambrose - My Fair Lady"], "Katrina Lenk - The Band's Visit),
    new Question('Which actor won Best Leading Actor in a Play?',
    ["Tom Holand - Travesties", "Jamie Parker - Harry Potter and the Cursed Child", "Andrew Garfield - Angels in America", "Mark Rylance - Farinelli and the King", "Denzel Washington - The Iceman Cometh"], "Andrew Garfield - Angels in America"),
    new Question("Which actress won Best Leading Actress in a Play?",
    ["Condola Rashad - Saint Joan", "Glenda Jackson - Three Tall Women", "Lauren Ridloff - Children of a Lesser God", "Amy Schumer - Meteor Shower"], "Glenda Jackson - Three Tall Women"),
    new Question("Which actor won Best Featured Actor in a Musical?",
    ["Norbert Butz - My Fair Lady", "Alexander Gemignani - Carousel", "Grey Henson - Mean Girls", "Gavin Lee - SpongeBob SquarePants", "Ari'el Stachel - The Band's Visit"], "Ari'el Stachel - The Band's Visit"),
    new Question("Which actress won Best Featured Actress in a Musical?",
    ["Lindsay Mendez - Carousel", "Ariana DeBose - Summer: The Donna Summer Musical", "Renée Fleming - Carousel", "Ashley Park - Mean Girls", "Diana Rigg - My Fair Lady"], "Lindsay Mendez - Carousel"),
    new Question("Which actor won Best Featured Actor in a Play?",
    ["Anthony Boyle - Harry Potter and the Cursed Child", "Michael Cera - Lobby Hero", "Nathan Lane - Angels in America", "Brian Tyree Henry - Lobby Hero", "David Morse - The Iceman Cometh"], "Nathan Lane - Angels in America"),
    new Question("Which actress won Best Featured Actress in a Play?",
    ["Susan Brown - Angels in America", "Laurie Metcalf - Three Tall Women", "Noma Dumezweni - Harry Potter and the Cursed Child", "Denise Gough - Angels in America", "Deborah Findlay - The Children"], "Laurie Metcalf - Three Tall Women"),
    new Question("Which director won Best Director of a Musical?",
    ["The Band's Visit - David Cromer", "Once On This Island - Michael Arden", "SpongeBob SquarePants - Tina Landau", "Mean Girls - Casey Nicholaw", "My Fair Lady - Bartlett Sher"], "The Band's Visit - David Cromer"),
    new Question("Which director won Best Director of a Play",
    ["Angels in America - Marianne Elliott", "Three Tall Women - Joe Mantello", "Harry Potter and the Cursed Child - John Tiffany", "Travesties - Patrick Marber", "The Iceman Cometh - George C. Wolfe"], "Harry Potter and the Cursed Child - John Tiffany"),
    new Question("Which broadway won Best Choreography",
    ["My Fair Lady - Christopher Gattelli", "SpongeBob SquarePants - Christopher Gattelli", "Harry Potter and the Cursed Child - Steven Hoggett", "Mean Girls - Casey Nicholaw", "Carousel - Justin Peck"], "Carousel - Justin Peck"),
    new Question("Which broadway won Best Book of a Musical?",
    ["Frozen - Jennifer Lee", "The Band's Visit - Itamar Moses", "Mean Girls - Tina Fey", "SpongeBob SquarePants - Kyle Jarrow"], "The Band's Visit - Itamar Moses"),
    new Question("Which broadway won Best Original Score?",
    ["The Band's Visit - David Yazbek", "Angels in America - Adrian Sutton", "Frozen - Kristen Anderson-Lopez and Robert Lopez", "Mean Girls - Music: Jeff Richmond, Lyrics: Nell Benjamin", "SpongeBob SquarePants - Various Artists"], "The Band's Visit - David Yazbek"),
    new Question("Which broadway won Best Orchestrations?",
    ["Mean Girls - John Clancy", "SpongeBob SquarePants - Tom Kitt", "The Band's Visit - Jamshied Sharifi", "Once On This Island - Annmarie Milazzo & Michael Starobin", "Carousel - Jonathan Tunick"], "The Band's Visit - Jamshied Sharifi"),
    new Question("Which broadway won Best Scenic Design of a Musical?",
    ["Once On This Island - Dane Laffrey", "SpongeBob SquarePants - David Zinn", "The Band's Visit - Scott Pask", "Mean Girls - Scott Pask, Funn Ross and Adam Young", "My Fair Lady - Michael Yeargan"], "SpongeBob SquarePants - David Zinn"),
    new Question("Which broadway won Best Scenic Design of a Play?",
    ["Three Tall Women - Miriam Buether", "The Iceman Cometh - Santo Loquasto", "Angels in America - Ian MacNeil and Edward Pierce", "Farinelli and the King - Jonathan Fensom", "Harry Potter and the Cursed Child - Christine Jones"], "Harry Potter and the Cursed Child - Christine Jones"),
    new Question("Which broadway won Best Costume Design of a Musical?",
    ["Carousel - Ann Roth", "Mean Girls - Gregg Barnes", "Once On This Island - Clint Ramos", "My Fair Lady - Catherine Zuber", "SpongeBob SquarePants - David Zinn"], "My Fair Lady - Catherine Zuber"),
    new Question("Which broadway won Best Costume Design of a Play?",
    ["Angels in America - Nicky Gillibrand", "Harry Potter and the Cursed Child - Katrina Lindsay", "Three Tall Women - Ann Roth", "The Iceman Cometh - Ann Roth", "Farinelli and the King - Jonathan Fensom"], "Harry Potter and the Cursed Child - Katrina Lindsay"),
    new Question("Which broadway won Best Lighting Design of a Musical?",
    ["SpongeBob SquarePants - Kevin Adams", "The Band's Visit - Tyler Micoleau", "My Fair Lady - Donald Holder", "Carousel - Brian MacDevitt"], "The Band's Visit - Tyler Micoleau"),
    new Question("Which broadway won Best Lighting Design of a Play?",
    ["Harry Potter and the Cursed Child - Neil Austin", "Angels in America - Paule Constable", "The Iceman Cometh - Jules Fisher and Peggy Eisenhauer", "Farinelli and the King - Paul Russell", "Junk - Ben Stanton"], "Harry Potter and the Cursed Child - Neil Austin"),
    new Question("Which broadway won Best Sound Design of a Musical?",
    ["Once On This Island - Peter Hylenski", "Carousel - Scott Lehrer", "Mean Girls - Brian Ronan", "The Band's Visit - Kai Harada", "SpongeBob SquarePants - Walter Trarbach and Mike Dobson"], "The Band's Visit - Kai Harada"),
    new Question("Which broadway won Best Sound Design of a Play?",
    ["Travesties - Adam Cork", "Angels in America - Ian Dickinson for Autograph", "The Iceman Cometh - Dan Moses Schreier", "Harry Potter and the Cursed Child - Gareth Fry", "1984 - Tom Gibbons"], "Harry Potter and the Cursed Child - Gareth Fry"),
];

isCorrectAnswer(playerAnswerChoice) {
    if (playerAnswerChoice === this.answer) {
        return true
    } else {
        return false
    }
};