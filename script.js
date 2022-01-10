// list of questions
let questionsList = [
    {
        title: 'Gato',
        alternatives: ['Dog', 'Cat', 'Bird', 'Fish'],
        correctIndex: 1
    },

    {
        title: 'Ave',
        alternatives: ['Mouse', 'Hamster', 'Lizard', 'Bird'],
        correctIndex: 3
    },

    {
        title: 'Rata',
        alternatives: ['Cat', 'Fish', 'Rat', 'Shark'],
        correctIndex: 2
    },

    {
        title: 'Mosca',
        alternatives: ['Fly', 'Puma', 'Fish', 'Dog'],
        correctIndex: 0
    }
];

let App = {
    Start: function() {

        // store index position of current question
        this.currentPosition = 0;
        this.score = 0;

        // select alternatives by using a query
        let alternatives = document.querySelectorAll('.alternative');

        // loop through each li.alternative, adding event listener
        // NOTE: When we pass a function as a parameter in a forEach, the context is not preserved. To fix this, we use an arrow function (=>).
        alternatives.forEach((element, index) => {

            // if user presses on alternative, check if it is the correct answer
            element.addEventListener('click', () => {
                // check if answer is correct
                this.CheckAnswer(index);
            });
        });

        // show first question
        this.ShowQuestion(questionsList[this.currentPosition]);
        this.UpdateScore();
    },
    
    ShowQuestion: function(question) {

        // select title element and initialize text
        let title = document.getElementById('title');
        title.textContent = question.title;

        // retrieve all list items and display options player can use
        let alternatives = document.querySelectorAll('.alternative');
        alternatives.forEach(function(element, index) {
            element.textContent = question.alternatives[index];
        });
    },

    CheckAnswer: function(index) {

        let currentQuestion = questionsList[this.currentPosition];
        
        // reference answer text element
        let answerCheck = document.getElementById('answerCheck');

        if (currentQuestion.correctIndex == index) {
            // correct
            this.score++;
            this.AnswerCheck(answerCheck, currentQuestion, true);
        }
        else {
            // incorrect
            this.AnswerCheck(answerCheck, currentQuestion, false);
        }

        // increase position and update score
        this.IncreasePosition();
        this.UpdateScore();

        // show next question
        this.ShowQuestion(questionsList[this.currentPosition]);
    },

    IncreasePosition: function() {
        if (this.currentPosition == questionsList.length - 1) {
            this.currentPosition = 0;
        }
        else {
            this.currentPosition++;
        }
    },

    UpdateScore: function() {
        let scoreElement = document.getElementById('score');

        // this is called a template literal. It is an alternative to string concatenation
        scoreElement.textContent = `Score: ${this.score}`;
    },

    AnswerCheck: function(answerCheck, currentQuestion, isCorrect) {
        if (isCorrect == true) {
            answerCheck.textContent = "Correct! The answer is " + currentQuestion.alternatives[currentQuestion.correctIndex];
        }
        else {
            answerCheck.textContent = "Incorrect! The answer is " + currentQuestion.alternatives[currentQuestion.correctIndex];
        }
    }
};

// start program
App.Start();
