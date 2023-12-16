const myQuestions = [
    {
      question: 'Javascript is _________ language.',
      answers: {
        a: 'Programming',
        b: 'Application',
        c: 'None of These',
        d: 'Scripting',
      },
      multi: false,
      correctAnswer: 'd',
    },
    {
      question:
        'Which of the following is a valid type of function javascript supports?',
      answers: {
        a: 'named function',
        b: 'anonymous function',
        c: 'both of the above',
        d: 'none of the above',
      },
      multi: false,
      correctAnswer: 'c',
    },
    {
      question:
        'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
      answers: {
        a: 'getIndex()',
        b: 'location()',
        c: 'indexOf()',
        d: 'getLocation()',
      },
      multi: false,
      correctAnswer: 'c',
    },
    {
      question: 'Which one of the following is valid data type of JavaScript',
      answers: {
        a: 'number',
        b: 'void',
        c: 'boolean',
        d: 'nothing',
      },
      multi: true,
      correctAnswer: 'cd',
    },
  ];

const question = document.querySelector('.question') ; 
const answers = document.querySelector('.answers') ; 
const btnprevious = document.querySelector('.btn-previous') ; 
const btnnext = document.querySelector('.btn-next') ; 
const btnsubmit = document.querySelector('.btn-submit') ; 

btnsubmit.style.display = "none" ; 
btnprevious.style.display = "none" ; 

var currentIndex = 0 ; 
var chooseAnswer = [] // luu cac dap an da duoc chon

function displayQuestion(index){
    //lay cau hoi 
    question.innerHTML = `Question ${index+1} : ${myQuestions[index].question}.` ;
    console.log(myQuestions[index]);
    
    //lay dap an 
    answers.innerHTML = "" ; 
    var listKeys = Object.keys(myQuestions[index].answers) ; 
    console.log(listKeys);

    for(let i = 0 ; i<listKeys.length ; i++){
        var itemAsw = document.createElement('p') ; 
        if(myQuestions[index].multi==false){

          if(chooseAnswer[currentIndex]==listKeys[i]){
            itemAsw.innerHTML = 
            `
            <input type="${question[currentIndex].multi?"checkbox":"radio"}" id="${listKeys[i]}" name = "question_${index+1}"
            value = "${myQuestions[index].answers[listKeys[i]]}" checked = ${true}>
            <label>${myQuestions[index].answers[listKeys[i]]}</label>
            ` ; 
          }else {
            itemAsw.innerHTML = 
            `
            <input type="radio" id="${listKeys[i]}" name = "question_${index+1}"
            value = "${myQuestions[index].answers[listKeys[i]]}">
            <label>${myQuestions[index].answers[listKeys[i]]}</label>
            ` ; 
          }
      
        }else{
            itemAsw.innerHTML = 
            `
            <input type="checkbox" id="${listKeys[i]}" name = "question_${index+1}"
            value = "${myQuestions[index].answers[listKeys[i]]}">
            <label>${myQuestions[index].answers[listKeys[i]]}</label>
            ` ; 
          }
          
        
          answers.appendChild(itemAsw) ; 
    }


}
displayQuestion(currentIndex) ; 

function saveAnswer(){
  var listAnswer = document.querySelectorAll('input') ; 
  for(let i = 0 ; i<listAnswer.length ; i++){
    if(listAnswer[i].checked){
      chooseAnswer[currentIndex] = listAnswer[i].id ; 
    }
  }
  console.log(listAnswer);
  console.log(chooseAnswer);

}



//Next
btnnext.addEventListener('click' , function(){
    if(currentIndex < myQuestions.length-1){
      saveAnswer() ; 
      currentIndex++ ; 
        console.log(currentIndex);
        displayQuestion(currentIndex) ; 
        btnprevious.style.display = "inline" ; 
    }else{
        btnsubmit.style.display = "inline" ; 
    }
    
    
}) ; 

//Privious

btnprevious.addEventListener('click' , function(){
    if(currentIndex > 0){
        saveAnswer() ; 
        currentIndex-- ; 
        console.log(currentIndex);
        displayQuestion(currentIndex) ; 
        btnsubmit.style.display = "none" ; 
    }else {
        btnprevious.style.display = "none" ; 
    }
}) ; 

const score = document.querySelector('.score') ; 
score.style.display = "none" ; 
btnsubmit.addEventListener('click' , function(){
  var count = 0 ; 
  saveAnswer() ; 
  for(let i = 0 ; i<chooseAnswer.length ; i++){
    const element = chooseAnswer[i] ;
    console.log(chooseAnswer[i]);
    
    console.log(myQuestions[i].correctAnswer);
    if(chooseAnswer[i]==myQuestions[i].correctAnswer){
      count++ ; 
    }
  }

  score.style.display = "block" ; 
  score.textContent = `Score : ${count} / ${myQuestions.length}` ; 
  score.style.textTransform = "uppercase";
});
