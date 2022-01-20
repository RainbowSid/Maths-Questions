var inputs = document.querySelectorAll('.correct');
var correctAnswers = [];
var submitButton = document.getElementById('submitButton');
var answers = document.getElementById('correctAnswers');

function checkAnswer(ans) {
      if (ans in correctAnswers) {
         console.log('Haha, nice try!');
      } else {
         console.log(ans);
         correctAnswers.push(ans);
      }
}
submitButton.addEventListener('click', (e) => {
    answers.textContent = correctAnswers;
})