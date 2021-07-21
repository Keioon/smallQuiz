const nextButton = document.querySelector('.nextQuestion');
let progress = 0;

function progressAktualization(progress) {
  document.querySelector(".container p").innerHTML = `${progress}% progress`;
  document.querySelector(".progressBar progress").style.width = `${progress}%`;
};


nextButton.addEventListener('click', function(){
  progress += 8;
  if(progress > 100){
    progress = 100;
  }
  progressAktualization(progress);
});

const answerButtons = document.querySelectorAll('.answer');

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