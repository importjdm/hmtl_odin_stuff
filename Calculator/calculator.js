const screen = document.getElementsByClassName("screen");
const display = document.createElement("div");
let result = "";
let n1 = "";
let n2 = "";
let op = "";
let input1 = "";
let equals = "";
let answer = "";
let clear = "";
let op2 = false;

function add(numberA, numberB) {
      answer = parseInt(numberA) + parseInt(numberB);
    console.log(answer)
    return answer;
  };
  
function subtract(numberA, numberB) {
       answer = numberA - numberB;
      console.log(answer);
    return answer;
  };
  
function multiply(numberA, numberB) {
     answer = numberA * numberB;
    
    console.log(answer);
    return answer; 
};

function divide(numberA, numberB){
     answer = numberA / numberB;
    console.log(answer);
    return answer;
  };

  function operate(op, n1, n2){
    if(op === "+"){
       add(n1, n2);
    } else if(op === "-"){
        subtract(n1, n2);
    } else if(op === "x"){
        multiply(n1, n2);
    } else if(op === "/") {
        divide(n1, n2);
    } else {
        alert("try again");
    }
  };



    function sortInputs (input1){
      if(input1 != "+" && input1 != "-" && input1 != "/" && input1 != "x" && input1 != "C" && op == "" && input1 != "="){ //if number
        n1 += input1; 
      }else if((input1 == "+" || input1 == "-" || input1 == "/" || input1 == "x") && (op2 != true)){//if operator //&& is looking for first falsey value so make it true to skip line of code
        op = input1;
        op2 = true;
      } else if(input1 != "C" && input1 != "=" && input1 != "+" && input1 != "-" && input1 != "/" && input1 != "x"){ //is second number 
        n2 += input1;
      } else if(input1 == "C"){ //triggers clearing display below
        n1 = n2 = op = result = "";
        clear = "trigger";
      }else if((input1 == "=") && (n1 == "" || op == "" || n2 == "")){  // if = is pressed without n1, n2, & op being declared first get this error
        n1 = n2 = op = result = "";
        clear = "error";
      }else if(input1 == "="){ //THIS IS WHERE YOU CHOOSE WHAT HAPPENS FOR SECOND OPERAND
        result = "action";
      } else if(input1 == "+" || input1 == "-" || input1 == "/" || input1 == "x"){//means they chose another operation instead of the equals sign
        result = "actionTwo";

      }
    }
    
    // makeThisShitWork () 
        const buttons = Array.from(document.getElementsByClassName("button")); //trying to get the buttons
     

        buttons.forEach((button) => {
        button.addEventListener("click", function() {
          input1 = button.id;
          if(n1 == ""){
            display.innerText = ""; //makes answer disapear once you click another number like any other calculater. 
          }
          sortInputs(input1);
            const screen2 = document.querySelector(".screen") //grabs the div thats going on the screen
          if(op == "/" && n2 == "0"){
            display.innerText = "no divison by 0, try again!" //if dividing by zero it throws an error
            screen2.appendChild(display);
            n1 = n2 = op = result = "";
            op2 = false;
          }else if(result == "action") { //displays total
            operate(op, n1, n2);
            n1 = n2 = op = result = "";
            op2 = false;
            display.innerText = answer;
            screen2.appendChild(display);
          }else if (result == "actionTwo"){ //if someone inputs multiple operators in the same problem (breaks it down one at a time & answer becomes n1)
            operate(op, n1, n2);
            op = input1;
            n1 = answer;
            n2 = "";
            result = "";
            display.innerText = answer + "" + op;
            screen2.appendChild(display);
          }else if(clear == "error"){
            display.innerText = "missing operand or operator!";
            screen2.appendChild(display);
            clear = "";
          }else if(clear == "trigger"){ //triggers when "c" is chosen. clears display
            display.innerText = "";
            screen2.appendChild(display);
            clear = "";
            op2 = false;
          }else{
            display.innerText = display.innerText + input1;  //displays whatever button was pressed
            screen2.appendChild(display);  

          }
       });
      
    });
      
      
        //Pressing = before entering all of the numbers or an operator could cause problems!


        //(DONE)how to get button info (id) into sortInputs function.
        //(DONE)figure out how to get it to display the result
        //(DONE)make if statement if input1 equals a "=" then make the computation
        //(DONE) SOMEHOW))make consecutive numbers stay on the screen / how to determine when the youre at the second operand
        
        //(DONE)if multiple operations make it solve the first one first and use the answer as one of the numbers for the second operation
        //(DONE)when you hit the equals sign it should display the answer but then after the anwer should disapear and the number you press should show up.
        //(DONE)when missing operator or operand give error message
        //(DONE)display a error message when trying to divide by zero


        /*(DONE)so how, with a if statment else if(op == / && n2 == 0) */