const dataSources = {};  //object in wchih I have array named Question

dataSources.questions = [
  {
    id: '0',
    txt: 'What is the correct HTML for referring to an external style sheet?',
    pre: " ",
    answers: {
      a: '&lt;style src="style.css"&gt;&lt;/style&gt;', 
      b: '&lt;stylesheet&gt;style.css&lt;/stylesheet&gt;',
      c: '&lt;style href="style.css"&gt;&lt;/style&gt;',
      d: '&lt;link rel="stylesheet" href="css/style.css"&gt;'
    },
    correctAnswer: 'd'
  },
  {
    id: '1',
    txt: 'What does CSS stand for?',
    pre: " ",
    answers: {
      a: 'Creative Style Sheet',
      b: 'Colorful Style Sheet',
      c: 'Cascading Style Sheets',
      d: 'Computer Style Sheets'
    },
    correctAnswer: 'c'
  },
  {
    id: '2',
    txt: 'What does HTML stand for?',
    pre: " ",
    answers: {
      a: 'Hyperlinks and Text Markup Language',
      b: 'Home Tool Markup Language',
      c: 'Hyper Text Markup Language',
      d: 'Home Text Mixed Language'
    },
    correctAnswer: 'c'
  },
  {
    id: '3',
    txt: 'Who is making the Web standards?',
    pre: " ",
    answers: {
      a: 'The World Wide Web Consortium',
      b: 'Google',
      c: 'Microsoft',
      d: 'Mozilla'
    },
    correctAnswer: 'a'
  },
  {
    id: '4',
    txt: 'Which character is used to indicate an end tag?',
    pre: " ",
    answers: {
      a: '<',
      b: '*',
      c: '^',
      d: '/'
    },
    correctAnswer: 'd'
  },
  {
    id: '5',
    txt: 'Which HTML attribute is used to define inline styles?',
    pre: " ",
    answers: {
      a: 'class',
      b: 'styles',
      c: 'style',
      d: 'font'
    },
    correctAnswer: 'c'
  },
  {
    id: '6',
    txt: 'Inline elements are normally displayed without starting a new line.',
    pre: " ",
    answers: {
      a: 'False',
      b: 'True',
      c: 'In Html we dont have inline elements',
      d: 'Inline elements can not change font size'
    },
    correctAnswer: 'b'
  },
  {
    id: '7',
    txt: 'Which input type defines a slider control?',
    pre: " ",
    answers: {
      a: 'range',
      b: 'controls',
      c: 'slider',
      d: 'search'
    },
    correctAnswer: 'c'
  },
  {
    id: '8',
    txt: 'In HTML, which attribute is used to specify that an input field must be filled out?',
    pre: " ",
    answers: {
      a: 'placeholder',
      b: 'formvalidate',
      c: 'required',
      d: 'validate'
    },
    correctAnswer: 'c'
  },
  {
    id: '9',
    txt: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
    pre: " ",
    answers: {
      a: 'title',
      b: 'src',
      c: 'longdesc',
      d: 'alt'
    },
    correctAnswer: 'd'
  },
];