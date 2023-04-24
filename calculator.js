

const availableOperators = ['+', '-', '*', '/', '='];
const temp = document.querySelector('.temp');
const stored = document.querySelector('.stored')
let numberOne = '';
let numberTwo = '';
let operator = '';

console.log("test");


console.log(operate(numberOne, operator, numberTwo));


window.addEventListener('keydown', function (e) {
    const input = document.querySelector(`div[data-key="${e.key}"]`);
    input.classList.add('pressed');
    console.log(e)
    
    
    
    //if the input is 'clear', the calculator is reset
    if (input.innerHTML == "clear") {
        temp.textContent = "";
        stored.textContent = "";
        numberOne = '';
        numberTwo = '';
        operator = '';
    }
    
    
    
    //the screen will be filled with any figures
    if (input.classList.contains('figure')) {
        if(numberOne!='') temp.textContent='';
        //replacing the first number firsthand
        temp.textContent += input.innerHTML;
        
    }
    
    
    
    //if the input is an operator
    if (availableOperators.includes(input.innerHTML)) {
        

        if(input.innerHTML!='=' && operator==''){
            operator = input.innerHTML;
        }
        
        
        //if the first number wasn't taken into account
        if (numberOne=='') {
            numberOne = temp.textContent;
            if (temp.textContent == '') {
                numberOne = 0;
            }
            stored.textContent += numberOne
            temp.textContent = '';
            console.log(numberOne)
        } 
        
        
        
        numberTwo = temp.textContent;
        stored.textContent += numberTwo;
        temp.textContent = operate(numberOne, operator, numberTwo);
        numberTwo='';
        numberOne = temp.textContent

        //the operator is stored
        if(input.innerHTML!='='){
            operator = input.innerHTML;
            stored.textContent+=operator;
        }
        

    }
    
    
    
});
window.addEventListener('keyup', function (e) {
    const input = document.querySelector(`div[data-key="${e.key}"]`);
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
    
    
    if (numberOne == '' || undefined) {
        return numberTwo;
    }
    if (numberTwo == '' && operator == '') {
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
        return ("invalid")
    }
}


