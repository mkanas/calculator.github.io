
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen =(number)=>{
    calculatorScreen.value= number;
}
let prevNumber ='';
let calculationOperator= '';
let currentNumber= '0';

const inputNumber =(number)=>{
    if(currentNumber==='0'){
        currentNumber =number
    }else{
        currentNumber += number;
    } 
}

const numbers =document.querySelectorAll(".number");

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        if(isDone) {
            currentNumber = '0'
            prevNumber = ''
            isDone = false
        }
        inputNumber(event.target.value);
        updateScreen(currentNumber);
        console.log(event.target.value)
    })
})

const operators = document.querySelectorAll(".operator");

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        if(isDone) {
            isDone = false
        }
       inputOperator(event.target.value);
       updateScreen(calculationOperator);
    })
})
const inputOperator= (operator)=>{
    if(calculationOperator===''){
        prevNumber =currentNumber;
    }
    calculationOperator = operator;
    currentNumber ='0';
}
let  isDone = false

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', (event)=>{
    calculate();
    updateScreen(currentNumber);
    isDone=true;
    console.log("calculate done")
})


const calculate =()=>{
    let result = currentNumber;
    switch(calculationOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break;
        case "-":
            result = prevNumber - currentNumber
            break;
        case "*":
            result = prevNumber * currentNumber
            break;
        case "/":
            result = prevNumber / currentNumber
            break;
        default:
            break;
            
    }
    currentNumber = result;
    calculationOperator ='';
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click',()=>{
    clearAll();
    updateScreen(currentNumber);
})

const clearAll =()=>{
    prevNumber =''
    calculationOperator=''
    currentNumber='0'
}

const percentage = document.querySelector('.percentage')

const inputPercentage = () => {
    if(currentNumber.includes('%')) {
        return
    }
    currentNumber = currentNumber/100
}

percentage.addEventListener('click', (event) => {
    inputPercentage(event.target.value)
    updateScreen(currentNumber)
    console.log(parseFloat(currentNumber))
})



const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event)=>{
inputDecimal(event.target.value);
updateScreen(currentNumber);
})

inputDecimal =(dot)=>{
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}
