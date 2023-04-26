const availableOperators = ['+', '-', '*', '/', '='];
const temp = document.querySelector('.temp');
const stored = document.querySelector('.stored');
const buttons = document.querySelectorAll('button');
stored.innerHTML="";


let numberOne = 0;
let numberTwo = 0;
let operator = "+";
let wait=false;


console.log("test");
buttons.forEach(button=>button.addEventListener("mouseup",function (e) {
    const input = this;
    input.classList.remove('pressed');
    
}));

buttons.forEach(button=>button.addEventListener("mousedown",function (e) {
    const input = this;
    input.classList.add('pressed');
    
}));



buttons.forEach(button=>button.addEventListener("click", function (e) {
    const input = this;
    calculator(input);  
}));



window.addEventListener("keydown", 
function (e) {
    const input = document.querySelector(`button[data-key="${e.key}"]`);
    input.classList.add('pressed');
    calculator(input);
    
});


window.addEventListener('keyup', function (e) {
    const input = document.querySelector(`button[data-key="${e.key}"]`);
    input.classList.remove('pressed');
    
});


function calculator(input){   
    //if the input is 'clear', the calculator is reset
    if (input.innerHTML == "clear") {
        clear();
    }

    //if the last operation was concluded, the calculator is reset
    if (operator=='=') {
        if (input.classList.contains('figure')||input.innerHTML=='=') clear();
    }

    //if the previous operation failed, the calculator is reset
    if(temp.textContent=="impossible"||temp.textContent=="NaN"){
        clear();
    }
    
    
    
    
    
    if (input.classList.contains('figure')) {
        if(wait==true) temp.textContent="";
        wait=false;
        temp.textContent += input.innerHTML;
    }
    
    
    
    //if the input is an operator
    if (availableOperators.includes(input.innerHTML)) {
        
        //if the user hasn't entered any number before the operator
        if(temp.textContent==""){
            stored.textContent += numberOne;
        }
        
        if(operator!='=' && wait==false){
            numberTwo = temp.textContent;
            stored.textContent += numberTwo;
            temp.textContent = operate(numberOne, operator, numberTwo);
            numberTwo=0;
            numberOne = temp.textContent;
            
        }
        
        
        operator = input.innerHTML;
        
        if(input.innerHTML!="=" && wait==false){
            stored.textContent+=operator;
        }
        wait=true;
        
        if(operator=='='){
            wait=false;
        }
        
    }
    
    affichageUn.innerHTML=numberOne;
    affichageDeux.innerHTML=numberTwo;
}


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
    if(numberTwo==0){
        return "impossible";
    }
    return numberOne / numberTwo;
}
function power(numberOne, numberTwo) {
    return Math.pow(numberOne, numberTwo)
}

function clear(){
    temp.textContent = "";
    stored.textContent = "";
    numberOne = 0;
    numberTwo = 0;
    operator = "+";
}

function operate(numberOne, operator, numberTwo) {
    
    //the strings are converted to numerical values
    numberOne *= 1;
    numberTwo *= 1;
    
    
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
        return ("invalid : operator is "+operator);
    }
}


