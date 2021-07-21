const dataSources = {};  //object in wchih I have array named Question

dataSources.questions = [
  {
    id: 1,
    question: 'What is the correct HTML for referring to an external style sheet?',
    answers: {
      a: '<style src="style.css">',
      b: '<stylesheet>style.css</stylesheet>',
      c: '<style href="style.css">',
      d: '<link rel="stylesheet" href="css/style.css">'
    },
    correctAnswer: 'd'
  },
  {
    id: 2,
    question: 'What does CSS stand for?',
    answers: {
      a: 'Creative Style Sheet',
      b: 'Colorful Style Sheet',
      c: 'Cascading Style Sheets',
      d: 'Computer Style Sheets'
    },
    correctAnswer: 'c'
  },
  {
    id: 3,
    question: 'What does HTML stand for?',
    answers: {
      a: 'Hyperlinks and Text Markup Language',
      b: 'Home Tool Markup Language',
      c: 'Hyper Text Markup Language',
      d: 'Home Text Mixed Language'
    },
    correctAnswer: 'c'
  },
];