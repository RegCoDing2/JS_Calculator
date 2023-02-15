let displayValue = "";
let input1;
let input2;
let operator;
let operatorClicked = false;
let equalClicked = false;
let chain = false;

const display = document.querySelector(".display");

const btnClear = document.querySelector(".clear");

btnClear.addEventListener('click', function(e){
    displayValue = null;
    input1 = null;
    input2 = null;
    operator = "";
    operatorClicked = false;
    equalClicked = false;
    chain = false;
    display.innerText = "";
});

const btnNum = document.querySelectorAll(".number");

btnNum.forEach((numberButton) => {
    numberButton.addEventListener('click', function(e) {
        if(chain == true)
        {
            display.innerText = "";

            if(display.innerText.length < 9)
            {
                display.innerText += e.target.value;
            }

            chain = false;
        }
        else
        {
            if(display.innerText.length < 9)
            {
                display.innerText += e.target.value;
            }
        }
    });
});

const btnOperator = document.querySelectorAll(".operator");

btnOperator.forEach((operatorButton) => {
    operatorButton.addEventListener('click', function(e) {

    if(display.innerText.toString() == "")
    {

    }
    else
    {
        if(operatorClicked == false)
        {
            input1 = parseFloat(display.innerText);

            operator = e.target.value;

            display.innerText = "";

            operatorClicked = true;

            changeOperator = true;

            equalClicked = false;
        }
        else if(operatorClicked == true)   //For chaining purposes
        {
            input2 = parseFloat(display.innerText);

            displayValue = operate(input1, input2, operator);
            
            if (displayValue.toString().length > 9) 
            {
                displayValue = parseFloat(displayValue.toFixed(9));
            }

            display.innerText = displayValue;

            input1 = parseFloat(display.innerText); 

            operator = e.target.value;

            equalClicked = false;  

            chain = true;
        }
    }
    });
});

const btnEquals = document.querySelector(".equals");

btnEquals.addEventListener('click', function(e){
    if(display.innerText.toString() == "")
    {
        
    }
    else
    {
        //--------------------------------Normal---------------------------------
        if(equalClicked == false)
        {
            input2 = parseFloat(display.innerText);

            displayValue = operate(input1, input2, operator);
            
            if (displayValue.toString().length > 9) 
            {
                displayValue = parseFloat(displayValue.toFixed(9));
            }

            display.innerText = displayValue;

            input1 = parseFloat(display.innerText);

            operatorClicked = false;

            changeOperator = false;

            equalClicked = true;
        }
        else    //----------------------Chain--------------------------------------
        {
            display.innerText = "";

            displayValue = operate(input1, input2, operator);
            
            if (displayValue.toString().length > 9) 
            {
                displayValue = parseFloat(displayValue.toFixed(9));
            }

            display.innerText = displayValue;

            input1 = parseFloat(display.innerText);
        }
    }
});

const btnSign = document.querySelector(".sign");

btnSign.addEventListener('click', function(e){
    if(display.innerText.toString() == "")
    {

    }
    else
    {
       display.innerText = parseFloat(display.innerText) * -1; 
    }
    
});

const btnPercent = document.querySelector(".percent");

btnPercent.addEventListener('click', function(e){
    if(display.innerText.toString() == "")
    {

    }
    else
    {  
        displayValue = parseFloat(display.innerText)/100;
            
        if (displayValue.toString().length > 9) 
        {
            displayValue = parseFloat(displayValue.toFixed(9));
        }

        display.innerText = displayValue;
    }
    
});

const btnDecimal = document.querySelector(".decimal");

btnDecimal.addEventListener('click', function(e){
    if(display.innerText.toString().includes(".") == false && display.innerText.toString() != "")
    {
        display.innerText = display.innerText.toString() + '.';
    }
});

function add(number1, number2){
    let result = parseFloat(number1 + number2);

    return result;
}

function subtract(number1, number2){
    let result = parseFloat(number1 - number2);

    return result;
}

function multiply(number1, number2){
    let result = parseFloat(number1 * number2);

    return result;
}

function divide(number1, number2){
    let result = parseFloat(number1 / number2);

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