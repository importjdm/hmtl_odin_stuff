
function add(numberA, numberB) {
    let answer = numberA + numberB;
    console.log(answer)
    return answer;

  
  };
  
function subtract(numberA, numberB) {
      const answer = numberA - numberB;
      console.log(answer);
    return answer;
  };
  
function multiply(numberA, numberB) {
    let answer = numberA * numberB;
    
    console.log(answer);
    return answer; 
};

function divide(numberA, numberB){
    const answer = numberA / numberB;
    console.log(answer);
    return answer;
  };

  function operate(o, n1, n2){
    
    if(o === "+"){
       add(n1, n2);
    } else if(o === "-"){
        subtract(n1, n2);
    } else if(o === "*"){
        multiply(n1, n2);
    } else if(o === "/") {
        divide(n1, n2);
    } else {
        alert("try again");
    }
  }
