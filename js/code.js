const nextButton = document.querySelector('.nextQuestion');
let progress = 0;
let idOfQuestion = 0;
const arrayOfAnswers = [];
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const section = document.querySelector('section');
const h3 = document.querySelector('.questionBox h3');
const questionBoxPre = document.querySelector('.questionBox pre');
const liOne = document.querySelector('ul li:nth-of-type(1) button');
const liTwo = document.querySelector('ul li:nth-of-type(2) button');
const liThree = document.querySelector('ul li:nth-of-type(3) button');
const liFour = document.querySelector('ul li:nth-of-type(4) button');

function progressAktualization(progress) {
  document.querySelector(".container p").innerHTML = `${progress}% progress`;
  document.querySelector(".progressBar progress").style.width = `${progress}%`;
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

function removingClassChoosen(index) { 
  arrayOfAnswers.push(dataSources.questions[index]);
  for(button of answerButtons) {
    if(button.classList.contains('choosen')) {
      dataSources.questions[index].givenAnswer = button.classList;
      button.classList.remove('choosen');
    }
  }

  // for(let i=0; i<answerButtons.length; i++) {
  //   if(answerButtons[i].classList.contains('choosen')) {
  //     console.log('odp', answerButtons[i]);
  //     dataSources.questions[index].givenAnswer = answerButtons[i].value;
  //     console.log(dataSources.questions[index].givenAnswer);
  //     answerButtons[i].classList.remove("choosen");
  //   }
  // }
}

const addColorOfStatus = () => {
  const sections = document.querySelectorAll('section');
  console.log('sections',sections)
  sections.forEach(section => {
    console.log(section);
    const buttons = section.querySelectorAll(`button`);
    const givenAnswer = arrayOfAnswers[section.classList].givenAnswer;
    const correctAnswer = arrayOfAnswers[section.classList].correctAnswer;
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
    console.log('but',buttons);
  })
}

const showAllAnswers = () => {
  footer.remove();
  section.remove();
  console.log('odp', arrayOfAnswers);
  let result = 0;
  arrayOfAnswers.forEach(el => {
    console.log(el);
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
  const p = document.createElement('p');
  p.innerHTML = `You get: ${result} points`
  header.appendChild(p);
  addColorOfStatus();
}

nextButton.addEventListener('click', function(){
  progress += 10;
  removingClassChoosen((progress/10)-1);
  if(progress == 100){
    progressAktualization(progress);
    return showAllAnswers(); 
  } else {
    progressAktualization(progress);
    idOfQuestion++;
    changingQuestionOnNext(idOfQuestion); 
  }
});

const answerButtons = document.querySelectorAll('li button');

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

changingQuestionOnNext(0);