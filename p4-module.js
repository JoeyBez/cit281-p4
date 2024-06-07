const {data} = require("./p4-data.js");

function getQuestions(){
    let dupe = [];
    for(const d of data){
        dupe.push(d.question);
    }
    return dupe;
}

function getAnswers(){
    let dupe = [];
    for(const d of data){
        dupe.push(d.answer);
    }
    return dupe;
}

function getQuestionsAnswers(){
    let dupe = [...data];
    return dupe;
}


function getQuestion(number = ""){
    if(number - 1 < 0 || number > data.length){
        return {question: '', number: number, error: 'Question not found'};
    }
    
    return {question: data[number - 1].question, number: number, error: ''};;
}

function getAnswer(number = ""){
    if(number - 1 < 0 || number > data.length){
        return {answer: '', number: number, error: 'Question not found'};
    }
    
    return {answer: data[number - 1].answer, number: number, error: ''};;
}

function getQuestionAnswer(number = ""){
    if(number - 1 < 0 || number > data.length){
        return {question: '', answer: '', number: number, error: 'Question not found'};
    }
    
    return {question: data[number - 1].question, answer: data[number - 1].answer, number: number, error: ''};;
}

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }

  // getQuestion()
if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }
