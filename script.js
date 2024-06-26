const questions = [
    {
        question: "Kas ir Latvijas galvaspilsēta?",
        answers: [
            { text: "Rīga", correct: true },
            { text: "Liepāja", correct: false },
            { text: "Daugavpils", correct: false },
            { text: "Ventspils", correct: false }
        ]
    },
    {
        question: "Kura ir Latvijas nacionālā valoda?",
        answers: [
            { text: "Krievu valoda", correct: false },
            { text: "Igauņu valoda", correct: false },
            { text: "Latviešu valoda", correct: true },
            { text: "Lietuviešu valoda", correct: false }
        ]
    },
    {
        question: "Kurš ir pazīstamākais latviešu komponists?",
        answers: [
            { text: "Jāzeps Vītols", correct: false },
            { text: "Alfrēds Kalniņš", correct: false },
            { text: "Pēteris Vasks", correct: false },
            { text: "Imants Kalniņš", correct: true }
        ]
    },
    {
        question: "Kurā gadā Latvija atguva neatkarību no Padomju Savienības?",
        answers: [
            { text: "1985. gadā", correct: false },
            { text: "1990. gadā", correct: false },
            { text: "1991. gadā", correct: true },
            { text: "1994. gadā", correct: false }
        ]
    },
    {
        question: "Kas ir Latvijas nacionālais sporta veids?",
        answers: [
            { text: "Futbols", correct: false },
            { text: "Hokejs", correct: true },
            { text: "Basketbols", correct: false },
            { text: "Vieglatlētika", correct: false }
        ]
    },
    {
        question: "Kura ir Latvijas lielākā upe?",
        answers: [
            { text: "Gauja", correct: false },
            { text: "Daugava", correct: true },
            { text: "Venta", correct: false },
            { text: "Lielupe", correct: false }
        ]
    },
    {
        question: "Kāda ir latviešu nacionālā valūta, pirms eiro ieviešanas?",
        answers: [
            { text: "Lats", correct: true },
            { text: "Eiro", correct: false },
            { text: "Rubļi", correct: false },
            { text: "Krona", correct: false }
        ]
    },
    {
        question: "Kas ir pazīstamākais latviešu literāts?",
        answers: [
            { text: "Rainis", correct: true },
            { text: "Imants Ziedonis", correct: false },
            { text: "Aspazija", correct: false },
            { text: "Andrejs Pumpurs", correct: false }
        ]
    },
    {
        question: "Kas ir Latvijas simbols?",
        answers: [
            { text: "Egle", correct: false },
            { text: "Bērzi", correct: false },
            { text: "Ozols", correct: true },
            { text: "Pīlādzis", correct: false }
        ]
    },
    {
        question: "Kura ir Latvijā lielākā pilsēta pēc iedzīvotāju skaita?",
        answers: [
            { text: "Liepāja", correct: false },
            { text: "Jelgava", correct: false },
            { text: "Daugavpils", correct: false },
            { text: "Rīga", correct: true }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.btn');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    restartButton.style.display = 'none';
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.answers[index].text;
        button.dataset.correct = currentQuestion.answers[index].correct;
        button.disabled = false;
    });
}

function resetState() {
    resultElement.textContent = '';
    answerButtons.forEach(button => {
        button.classList.remove('correct', 'wrong');
    });
}

function selectAnswer(index) {
    const selectedButton = answerButtons[index];
    const correct = selectedButton.dataset.correct === 'true';
    if (correct) {
        score++;
        selectedButton.classList.add('correct');
    } else {
        selectedButton.classList.add('wrong');
        // Mark the correct answer
        answerButtons.forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
        });
    }
    scoreElement.textContent = `Rezultāts: ${score}`;
    answerButtons.forEach(button => button.disabled = true);
    resultElement.textContent = correct ? 'Pareizi!' : 'Nepareizi!';
    nextButton.style.display = 'block';
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = 'none';
        restartButton.style.display = 'block';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = 'none';
    }
}

function restartQuiz() {
    startQuiz();
}

startQuiz();
