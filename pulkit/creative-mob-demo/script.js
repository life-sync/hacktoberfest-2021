// ******Add Selectors here*****

const operationString = document.querySelector('.calculator__operation');
const resultString = document.querySelector('.calculator__result');

const btn0 = document.getElementById('0');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const btn3 = document.getElementById('3');
const btn4 = document.getElementById('4');
const btn5 = document.getElementById('5');
const btn6 = document.getElementById('6');
const btn7 = document.getElementById('7');
const btn8 = document.getElementById('8');
const btn9 = document.getElementById('9');
const btnDot = document.getElementById('.');
const btnPercent = document.getElementById('%');

const addBtn = document.getElementById('+');
const subsBtn = document.getElementById('-');
const multiplyBtn = document.getElementById('*');
const divideBtn = document.getElementById("/");
const equalBtn = document.getElementById('=');
const resetBtn = document.getElementById("reset");
const removeLastBtn = document.getElementById("removeLast");

// ****add functions here for addition subtraction multiplication and division*****
const displayHandler = () => {
  resultString.innerHTML = eval(operationString.innerHTML);
};

const appendText = (character) => {
  operationString.innerHTML += character
}

const removeLastChar = () => {
  if(operationString.innerHTML.length >= 1){
    operationString.innerHTML = operationString.innerHTML.substring(0, operationString.innerHTML.length-1);
  }
}

const resetInput = () => {
  operationString.innerHTML = "";
  resultString.innerHTML = "";
}

// ******add events here *******

equalBtn.addEventListener('click', displayHandler);
addBtn.addEventListener('click', () => appendText("+"));
subsBtn.addEventListener('click', () => appendText("-"));
multiplyBtn.addEventListener('click', () => appendText("*"));
divideBtn.addEventListener('click', () => appendText("/"));
resetBtn.addEventListener('click', () => resetInput());
removeLastBtn.addEventListener('click', () => removeLastChar());

btn0.addEventListener('click', () => appendText("0"));
btn1.addEventListener('click', () => appendText("1"));
btn2.addEventListener('click', () => appendText("2"));
btn3.addEventListener('click', () => appendText("3"));
btn4.addEventListener('click', () => appendText("4"));
btn5.addEventListener('click', () => appendText("5"));
btn6.addEventListener('click', () => appendText("6"));
btn7.addEventListener('click', () => appendText("7"));
btn8.addEventListener('click', () => appendText("8"));
btn9.addEventListener('click', () => appendText("9"));
btnDot.addEventListener('click', () => appendText("."));
btnPercent.addEventListener('click', () => appendText('%'));