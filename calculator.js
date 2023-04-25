const availableOperators = ['+', '-', '*', '/', '='];
const temp = document.querySelector('.temp');
const stored = document.querySelector('.stored');
const buttons = document.querySelectorAll('button');
stored.innerHTML="";

let numberOne = "";
let numberTwo = "";
let operator = "";

console.log("test");

buttons.forEach(button=>button.addEventListener("click", function (e) {
    const input = this;
    input.classList.add('pressed');
    
    
    
    function clear(){
        temp.textContent = "";
        stored.textContent = "";
        numberOne = "";
        numberTwo = "";
        operator = "";
    }
    
    //if the input is 'clear', the calculator is reset
    if (input.innerHTML == "clear") {
        clear();
    }
    
    if (input.classList.contains('figure')) {
        if(operator=='='){
            //if the last operator used was =, the calculator is reset
            clear();
        }


        if( numberOne!="" && temp.textContent==numberOne ) temp.textContent="";
        temp.textContent += input.innerHTML;
        
    }
    
    
    
    //if the input is an operator
    if (availableOperators.includes(input.innerHTML)) {
        
        
        if(input.innerHTML!="=" && operator==""){
            operator = input.innerHTML;
        }
        if(operator=='=' && input.innerHTML=='='){
            //if the last operator used was =, the calculator is reset
            clear();
        }
        
        //if the first number wasn't taken into account
        if (numberOne=="") {
            numberOne = temp.textContent;
            if (temp.textContent == "") {
                numberOne = 0;
            }
            stored.textContent += numberOne
            temp.textContent = "";
        }      
        
        else{

        numberTwo = temp.textContent;
        stored.textContent += numberTwo;
        temp.textContent = operate(numberOne, operator, numberTwo);
        numberTwo="";
        numberOne = temp.textContent;
        }

        operator = input.innerHTML;
        if(input.innerHTML!="="){
            stored.textContent+=operator;
        }
        
        
    }
    
    
    
}));



window.addEventListener("keydown", 
function (e) {
    const input = document.querySelector(`button[data-key="${e.key}"]`);
    input.classList.add('pressed');
    
    
    
    function clear(){
        temp.textContent = "";
        stored.textContent = "";
        numberOne = "";
        numberTwo = "";
        operator = "";
    }
    
    //if the input is 'clear', the calculator is reset
    if (input.innerHTML == "clear") {
        clear();
    }
    
    if (input.classList.contains('figure')) {
        if(operator=='='){
            //if the last operator used was =, the calculator is reset
            clear();
        }


        if( numberOne!="" && temp.textContent==numberOne ) temp.textContent="";
        temp.textContent += input.innerHTML;
        
    }
    
    
    
    //if the input is an operator
    if (availableOperators.includes(input.innerHTML)) {
        
        
        if(input.innerHTML!="=" && operator==""){
            operator = input.innerHTML;
        }
        if(operator=='=' && input.innerHTML=='='){
            //if the last operator used was =, the calculator is reset
            clear();
        }
        
        //if the first number wasn't taken into account
        if (numberOne=="") {
            numberOne = temp.textContent;
            if (temp.textContent == "") {
                numberOne = 0;
            }
            stored.textContent += numberOne
            temp.textContent = "";
        }      
        
        else{

        numberTwo = temp.textContent;
        stored.textContent += numberTwo;
        temp.textContent = operate(numberOne, operator, numberTwo);
        numberTwo="";
        numberOne = temp.textContent;
        }

        operator = input.innerHTML;
        if(input.innerHTML!="="){
            stored.textContent+=operator;
        }
        
        
    }
    
    
    
});


window.addEventListener('keyup', function (e) {
    const input = document.querySelector(`button[data-key="${e.key}"]`);
    input.classList.remove('pressed');
    
});

function add(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
function multiply(numberOne, numberTwo) {
    return numberOne * numberTwo;
}
function substract(numberOne, numberTwo) {
    return numberOne - numberTwo;
}
function divide(numberOne, numberTwo) {
    return numberOne / numberTwo;
}
function power(numberOne, numberTwo) {
    return Math.pow(numberOne, numberTwo)
}

function operate(numberOne, operator, numberTwo) {
    
    //the strings are converted to numerical values
    numberOne *= 1;
    numberTwo *= 1;
    
    

    if (numberTwo == "" && operator == "") {
        return 0;
    }
    switch (operator) {
        case '*':
        return multiply(numberOne, numberTwo);
        case '/':
        return divide(numberOne, numberTwo);
        case '+':
        return add(numberOne, numberTwo);
        case '-':
        return substract(numberOne, numberTwo);
        default:
        return ("invalid");
    }
}


