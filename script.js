let Question = {
    title: 'Gato',
    alternatives: ['Dog', 'Cat', 'Bird', 'Fish'],
    correctIndex: 1
};

function ShowQuestion(question) {
    // select title element amd modify
    let title = document.getElementById('title');
    title.textContent = question.title;

    // select alternatives by using a query
    let alternatives = document.querySelectorAll('.alternative');
    
    alternatives.forEach(function(element, index) {
        element.textContent = Question.alternatives[index];
    });
}

ShowQuestion(Question);
