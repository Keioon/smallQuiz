const nextButton = document.querySelector('.nextQuestion');
let progress = 0;
let idOfQuestion = 0;

function progressAktualization(progress) {
  document.querySelector(".container p").innerHTML = `${progress}% progress`;
  document.querySelector(".progressBar progress").style.width = `${progress}%`;
};

function changingQuestionOnNext(id) {
  console.log(document.querySelector('.questionBox h3'));
  document.querySelector('.questionBox h3').innerHTML = dataSources.questions[id].txt;
  document.querySelector('.questionBox pre').innerHTML = dataSources.questions[id].pre;
  document.querySelector('ul li:nth-of-type(1) button').innerHTML = dataSources.questions[id].answers.a;
  document.querySelector('ul li:nth-of-type(2) button').innerHTML = dataSources.questions[id].answers.b;
  document.querySelector('ul li:nth-of-type(3) button').innerHTML = dataSources.questions[id].answers.c;
  document.querySelector('ul li:nth-of-type(4) button').innerHTML = dataSources.questions[id].answers.d;
}

function removingClassChoosen() {
  for(let i=0; i<answerButtons.length; i++) {
    answerButtons[i].classList.remove("choosen");
  }
}

nextButton.addEventListener('click', function(){
  progress += 10;
  if(progress > 100){
    progress = 100;
  }
  progressAktualization(progress);
  changingQuestionOnNext(idOfQuestion);
  idOfQuestion ++;
  removingClassChoosen();
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