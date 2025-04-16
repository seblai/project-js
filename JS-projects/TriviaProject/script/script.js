let questionsBank = [
    {
        question: "Who is the president of Israel?",
        ansA: "Shlomo",
        ansB: "Bibi",
        ansC: "Gil",
        ansD: "Shai",
        correctAns: "ansB"
    },
    {
        question: "Is a bunny a..?",
        ansA: "Mammal",
        ansB: "Fish",
        ansC: "Bird",
        ansD: "Amphibian",
        correctAns: "ansA"
    },
    {
        question: "How many seasons are there in a year?",
        ansA: "Two",
        ansB: "Seven",
        ansC: "Four",
        ansD: "Eleven",
        correctAns: "ansC"
    },
    {
        question: "Whats the capital of Israel",
        ansA: "Haifa",
        ansB: "Ness-Ziona",
        ansC: "Tel Aviv",
        ansD: "Jerusalem",
        correctAns: "ansD"
    },
    {
        question: "Where's the Eiffel Tower?",
        ansA: "London",
        ansB: "Vienna",
        ansC: "Paris",
        ansD: "Shanghai",
        correctAns: "ansC"
    },
    {
        question: "What's the heaviest mammal on land?",
        ansA: "Giraffe",
        ansB: "Elephant",
        ansC: "Hippo",
        ansD: "Rhino",
        correctAns: "ansB"
    },
    {
        question: "How many world wonders are there?",
        ansA: "Seven",
        ansB: "Four",
        ansC: "Five",
        ansD: "Eight",
        correctAns: "ansA"
    },
    {
        question: " What is acrophobia a fear of?",
        ansA: "Spiders",
        ansB: "Holes",
        ansC: "Elevators",
        ansD: "Heights",
        correctAns: "ansD"
    },
]
const answerA = document.getElementById("ansAText");
const answerB = document.getElementById("ansBText");
const answerC = document.getElementById("ansCText");
const answerD = document.getElementById("ansDText");
const setQuestion = document.getElementById("question");
const inputs = document.getElementById("inputs");

let setCorrect = document.getElementById('correct');
const checkBtn = document.getElementById('submit')
const resetBtn = document.getElementById('reset')


let score = document.getElementById('score');
let questionCount = document.getElementById('questionCount');

currQuestionCount = 1;
currScore = 0;
let currentQuestion = 0;


function loadQuestion() {
    setQuestion.innerHTML = questionsBank[currentQuestion].question
    inputs.style.display = "flex";
    answerA.innerHTML = questionsBank[currentQuestion].ansA
    answerB.innerHTML = questionsBank[currentQuestion].ansB
    answerC.innerHTML = questionsBank[currentQuestion].ansC
    answerD.innerHTML = questionsBank[currentQuestion].ansD
    score.innerHTML = "Score: " + currScore;
    questionCount.innerHTML = "Question: " + currQuestionCount + "/" + questionsBank.length;
    setCorrect.innerHTML = "";
    setCorrect.style.color = "black";
}

loadQuestion()

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const ans = selectedAnswer.value;
        if (ans == questionsBank[currentQuestion].correctAns) {
            setCorrect.innerHTML = "Correct";
            setCorrect.style.color = "green";
            currScore++;
            currQuestionCount++;

        } else {
            setCorrect.innerHTML = "Wrong";
            setCorrect.style.color =
                "red";
            currQuestionCount++;
        }
        if (currentQuestion < questionsBank.length - 1) {
            selectedAnswer.checked = false;

            setTimeout(nextQuestion, 1400);


        } else {
            selectedAnswer.checked = false;
            setTimeout(endGame, 2000);
        }
    }
    else { setCorrect.innerHTML = "Please select an answer"; }
}
function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}
function endGame() {
    setCorrect.style.color = "black";
    setCorrect.innerHTML = "Quiz over! <br> Your score is: " + currScore + " out of " + questionsBank.length;
    score.innerHTML = "";
    questionCount.innerHTML = "";
    setQuestion.innerHTML = "";
    inputs.style.display = "none";
    checkBtn.style.display = 'none';
}
function resetQuiz() {
    checkBtn.style.display = 'block';
    currQuestionCount = 1;
    currScore = 0;
    currentQuestion = 0;
    setCorrect.innerHTML = "";
    loadQuestion();
}

resetBtn.addEventListener("click", () => { resetQuiz() })
checkBtn.addEventListener("click", () => { checkAnswer() })