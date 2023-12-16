var numbers = {
  [Symbol.iterator]: function* (){
    let num = 0 ; 
    while(num<=100){
      yield num ; 
      num++ ; 
    }
  }

};

// Print 0..100 by step 1
for (let num of numbers) {
  console.log(num);
}

// Another example: Print 6..30 by step 4
var numbersStep4 = {
  [Symbol.iterator]: function* (){
    let num = 6 ; 
    while(num<=30){
      yield num ; 
      num+=4 ; 
    }
  }

};

// Print 6..30 by step 4
for (let num of numbersStep4) {
  console.log(num);
}

//