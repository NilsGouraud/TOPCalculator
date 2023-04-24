console.log("test");

let test=document.querySelector(".contenu");
let nouveau=document.createElement("div");
nouveau.innerText=""
nouveau.innerText+=""

window.addEventListener('keydown',function(e){
    const digit=document.querySelector(`div[data-key="${e.key}"]`);
    console.log(e);
    digit.classList.add('pressed');
    
    document.querySelector('.screen').textContent+=digit.innerHTML;
    
});
window.addEventListener('keyup',function(e){
    const digit=document.querySelector(`div[data-key="${e.key}"]`);
    console.log(e);
    digit.classList.remove('pressed');
    
    
});

function add(numberOne, numberTwo){
    return numberOne+numberTwo;
}
function multiply(numberOne, numberTwo){
    return numberOne+numberTwo;
}
function substract(numberOne, numberTwo){
    return numberOne+numberTwo;
}
function divide(numberOne, numberTwo){
    return numberOne+numberTwo;
}
function power(numberOne, numberTwo){
    return Math.pow(numberOne,numberTwo)
}

function operate(numberOne, operator, numberTwo){
    switch (operator){
        case '*':
        return multiply(numberOne,numberTwo);
        case '*':
        return divide(numberOne,numberTwo);
        case '*':
        return add(numberOne,numberTwo);    
        case '*':
        return substract(numberOne,numberTwo);   
        default:
        return ("invalid")
    }
}


