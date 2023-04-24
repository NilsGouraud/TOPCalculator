

const availableOperators=['+','-','*','/'];
const temp=document.querySelector('.temp');
const stored=document.querySelector('.stored')
let numberOne='';
let numberTwo='';
let operator=''

console.log("test");


console.log(operate(numberOne,operator,numberTwo));


window.addEventListener('keydown',function(e){
    const digit=document.querySelector(`div[data-key="${e.key}"]`);
    
    //console.log(e);
    digit.classList.add('pressed');
    
    
    
    if(digit.innerHTML=="="){
        temp.textContent=operate(numberOne,operator,numberTwo);
    }
    
    if(!availableOperators.includes(digit.innerHTML)){
        if(digit.innerHTML!="="){
            temp.textContent+=digit.innerHTML;
        }
    }
    
    
    
    if(availableOperators.includes(digit.innerHTML)){
        if(operator==''){
            operator=digit.innerHTML;
            numberOne=temp.textContent;
            stored.textContent=numberOne+operator;
            temp.textContent="";
            
            
        }else{
            numberTwo=temp.textContent;
            temp.textContent=operate(numberOne,operator,numberTwo);
        }
        
    }
    
});
window.addEventListener('keyup',function(e){
    const digit=document.querySelector(`div[data-key="${e.key}"]`);
    digit.classList.remove('pressed');
    
    
});

function add(numberOne, numberTwo){
    return numberOne+numberTwo;
}
function multiply(numberOne, numberTwo){
    return numberOne*numberTwo;
}
function substract(numberOne, numberTwo){
    return numberOne-numberTwo;
}
function divide(numberOne, numberTwo){
    return numberOne/numberTwo;
}
function power(numberOne, numberTwo){
    return Math.pow(numberOne,numberTwo)
}

function operate(numberOne,operator,numberTwo){
    switch (operator){
        case '*':
        return multiply(numberOne,numberTwo);
        case '/':
        return divide(numberOne,numberTwo);
        case '+':
        return add(numberOne,numberTwo);    
        case '-':
        return substract(numberOne,numberTwo);   
        default:
        return ("invalid")
    }
}


