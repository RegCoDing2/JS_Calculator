var displayValue = 0;
var input1;
var input2;
var operator;
var clicked = false;

var btnNum = document.getElementsByClassName("number");
var btnOperator = document.getElementsByClassName("operator");
var btnEquals = document.getElementsByClassName("equals");
var btnSign = document.getElementsByClassName("sign");
var btnPercent = document.getElementsByClassName("percent");
var btnDecimal = document.getElementsByClassName("decimal");

btnNum.addEventListener('click', function(e){
    if(clicked == false)
    {
        input1 = e.target.value;
    }
    else
    {
        input2 = e.target.value;
    }        
});

btnOperator.addEventListener('click', function(e){
    if(clicked == false)
    {
        operator = e.target.value;

        clicked = true;
    }
    else
    {
        displayValue = displayValue + operate(input1, input2, operator);

        operator = e.target.value;

        input1 = displayValue;
    } 
});

btnEquals.addEventListener('click', function(e){
    if(input1 == null || input2 == null || operator == null)
    {
        alert("Error");
    }
    else
    {
        displayValue = displayValue + operate(input1, input2, operator);

        clicked = false;
    }
});

btnSign.addEventListener('click', function(e){
    displayValue = displayValue * -1;
});

btnPercent.addEventListener('click', function(e){
    displayValue = displayValue/100;
});

btnDecimal.addEventListener('click', function(e){
    displayValue = parseInt(displayValue.toString() + '.');
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