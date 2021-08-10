let progress;
const arrayOfAnswers = [];
const main = document.querySelector('main');
const header = document.querySelector('header');
let restartBtn;
let answerButtons;
let nextButton;

function progressAktualization(progress) {
  document.querySelector(".container p").innerHTML = `${progress}% progress`;
  document.querySelector(".progressBar progress").style.width = `${progress}%`;
};

function drawQuestion() {
  let random;
  do {
    random = Math.floor(Math.random() * dataSources.questions.length);
    arrayOfAnswers.forEach(el => {
      if(el.id == random) {
        random = null;
      }
    }); 
  } while (random == null);
  return random;
};

function changingQuestionOnNext(id) {
 // console.log(document.querySelector('.questionBox h3'));
  document.querySelector('.questionBox h3').innerHTML = dataSources.questions[id].txt;
  document.querySelector('.questionBox pre').innerHTML = dataSources.questions[id].pre;
  document.querySelector('ul li:nth-of-type(1) button').innerHTML = dataSources.questions[id].answers.a;
  document.querySelector('ul li:nth-of-type(2) button').innerHTML = dataSources.questions[id].answers.b;
  document.querySelector('ul li:nth-of-type(3) button').innerHTML = dataSources.questions[id].answers.c;
  document.querySelector('ul li:nth-of-type(4) button').innerHTML = dataSources.questions[id].answers.d;
}

function removingClassChoosen(id) { 
  arrayOfAnswers.push(dataSources.questions[id]);
  for(button of answerButtons) {
    if(button.classList.contains('choosen')) {
      dataSources.questions[id].givenAnswer = button.classList;
      button.classList.remove('choosen');
    }
  }
}

const addColorOfStatus = () => {
  const sections = document.querySelectorAll('section');
  sections.forEach((section, id)=> {
    const buttons = section.querySelectorAll(`button`);
    const givenAnswer = arrayOfAnswers[id].givenAnswer;
    const correctAnswer = arrayOfAnswers[id].correctAnswer;
    if(givenAnswer == correctAnswer){
      buttons.forEach(button => {
        if(button.classList.contains(correctAnswer)){
          button.classList.add('correct');
        }
      })
    } else {
      buttons.forEach(button => {
        if(button.classList.contains(correctAnswer)){
          button.classList.add('correct');
        } else if(button.classList.contains(givenAnswer)) {
          button.classList.add('wrong');
        }
      })
    }
  })
}

const sectionsRemove = () => {
  document.querySelectorAll('section').forEach(sect => {
    sect.remove();
  });
}

const quizRestart = () =>{
  document.querySelector('footer').remove();
  sectionsRemove();
  arrayOfAnswers.length = 0;
  const section = document.createElement('section');
  idOfQuestion = drawQuestion();
  section.innerHTML = 
    `<div class="questionBox">
    <h3 class="question">${dataSources.questions[idOfQuestion].txt}</h3>
      <pre>
        ${dataSources.questions[idOfQuestion].pre}
      </pre>
    </div>
    <div class="answerBox">
      <ul>
        <li><button class="a">${dataSources.questions[idOfQuestion].answers.a}</button></li>
        <li><button class="b">${dataSources.questions[idOfQuestion].answers.b}</button></li>
        <li><button class="c">${dataSources.questions[idOfQuestion].answers.c}</button></li>
        <li><button class="d">${dataSources.questions[idOfQuestion].answers.d}</button></li>
      </ul>
    </div>`;
  main.appendChild(section);
  document.querySelector('header h2').remove();
  startAplication();
}

const renderFooter = (state) => {
  const footer = document.createElement('footer');
  footer.innerHTML = `<button class=${state==0 ? '"nextQuestion">Next question':'"restartQuiz">Try again'}</button>`;
  main.appendChild(footer);
  restartBtn = document.querySelector('.restartQuiz');
  if(restartBtn)
  restartBtn.addEventListener('click', quizRestart);
}

const showAllAnswers = () => {
  document.querySelector('footer').remove();
  sectionsRemove();
  let result = 0;
  arrayOfAnswers.forEach(el => {
    const section = document.createElement('section');
    section.classList.add(el.id);
    section.innerHTML = 
      `<h4>${el.correctAnswer == el.givenAnswer.value ? '1/1' : '0/1'}</h4>
      <div class="questionBox">
        <h3 class="question">${el.txt}</h3>
        <pre>
          ${el.pre}
        </pre>
      </div>
      <div class="answerBox">
        <ul>
          <li><button class="a">${el.answers.a}</button></li>
          <li><button class="b">${el.answers.b}</button></li>
          <li><button class="c">${el.answers.c}</button></li>
          <li><button class="d">${el.answers.d}</button></li>
        </ul>
      </div>`;
    main.appendChild(section);
    if(el.correctAnswer == el.givenAnswer.value) {
      result++;
    }
  });
  const h2 = document.createElement('h2');
  h2.innerHTML = `You get: ${result} points`;
  header.appendChild(h2);
  renderFooter(1);
  addColorOfStatus();
}

const startAplication = () =>{
  progress = 0;
  progressAktualization(progress);
  renderFooter(0);
  let next = drawQuestion();

  nextButton = document.querySelector('.nextQuestion');

  nextButton.addEventListener('click', function(){
    progress += 10;
    removingClassChoosen(next);
    if(progress == 100){
      progressAktualization(progress);
      return showAllAnswers(); 
    } else {
      next = drawQuestion();
      progressAktualization(progress);
      changingQuestionOnNext(next); 
    }
  });

  answerButtons = document.querySelectorAll('li button');

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
  changingQuestionOnNext(next);
}

startAplication();