const nextButton = document.querySelector('.nextQuestion');

nextButton.addEventListener('click', function(){
  console.log(dataSources.questions);
});

const answerButtons = document.querySelectorAll('.answer');

console.log(answerButtons);
for(let i=0; i<answerButtons.length; i++) {
  answerButtons[i].addEventListener('click', function () {
    answerButtons[i].classList.toggle('choosen');
    for(let j=0; j<answerButtons.length; j++){
      if(j!=i){
        answerButtons[j].classList.remove('choosen');
      }
    }
  });
}