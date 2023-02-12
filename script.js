var displayValue = 0;
var input1;
var input2;
var operator;
var clicked = false;
var displayLength = 0;

const display = document.querySelector(".display");
const btnNum = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");
const btnEquals = document.querySelector(".equals");
const btnSign = document.querySelector(".sign");
const btnPercent = document.querySelector(".percent");
const btnDecimal = document.querySelector(".decimal");
const btnClear = document.querySelector(".clear")

btnClear.addEventListener('click', function(e){
    displayValue = 0;
    input1 = 0;
    input2 = 0;
    operator = "";
    clicked = false;
    displayLength = 0;
    display.innerText = "";
});

btnNum.forEach((numberButton) => {
    numberButton.addEventListener('click', function(e) {
        if(displayLength < 8)
        {
            display.innerText = "";
            display.innerText += e.target.value;
            displayLength++;
        }
    });
});

btnOperator.forEach((operatorButton) => {
    operatorButton.addEventListener('click', function(e) {
        if(clicked == false)
        {
            input1 = parseInt(display.innerText);

            operator = e.target.value;
    
            clicked = true;

            displayLength = 0;
        }
        else
        {
            displayValue = displayValue + operate(input1, input2, operator);
            display.innerText = displayValue;
    
            operator = e.target.value;
    
            input1 = displayValue;
        } 
    });
});

btnEquals.addEventListener('click', function(e){
    if(input1 == null && input2 == null && operator == null)
    {
        alert("Error");
    }
    else
    {
        input2 = parseInt(display.innerText);

        displayValue = operate(input1, input2, operator);
        
        if(displayValue.toString().length > 9)
        {
            displayValue = displayValue.toFixed(7);
        }

        display.innerText = displayValue;

        clicked = false;

        input2 = null;
    }
});

btnSign.addEventListener('click', function(e){
    display.innerText = parseInt(display.innerText) * -1;
});

btnPercent.addEventListener('click', function(e){
    display.innerText = parseInt(display.innerText)/100;
});

btnDecimal.addEventListener('click', function(e){
    display.innerText = display.innerText.toString() + '.'
});

function add(number1, number2){
    let result = number1 + number2;

    return result;
}

function subtract(number1, number2){
    let result = number1 - number2;

    return result;
}

function multiply(number1, number2){
    let result = number1 * number2;

    return result;
}

function divide(number1, number2){
    let result = number1 / number2;

    return result;
}

function operate(number1, number2, operator){
    if(operator == '+')
    {
        return add(number1, number2);
    }
    else if(operator == '-')
    {
        return subtract(number1, number2);
    }
    else if(operator == 'x')
    {
        return multiply(number1, number2);
    }
    else if(operator == '/')
    {
        return divide(number1, number2);
    }
}