const displayOne = document.querySelector("#displayOne");
const displayTwo = document.querySelector("#displayTwo");
const cBtn = document.querySelector("#cBtn");
const deBtn = document.querySelector("#deBtn");
const modulo = document.querySelector("#moduloBtn");
const devide = document.querySelector("#devideBtn");
const multiply = document.querySelector("#multiplyBtn");
const minus = document.querySelector("#minusBtn");
const plus = document.querySelector("#plusBtn");
const equal = document.querySelector("#equalBtn");
const zero = document.querySelector("#zeroBtn");
const dot = document.querySelector("#dotBtn");
const one = document.querySelector("#oneBtn");
const two = document.querySelector("#twoBtn");
const three = document.querySelector("#threeBtn");
const four = document.querySelector("#fourBtn");
const five = document.querySelector("#fiveBtn");
const six = document.querySelector("#sixBtn");
const seven = document.querySelector("#sevenBtn");
const eight = document.querySelector("#eightBtn");
const nine = document.querySelector("#nineBtn");
let numOne = "";
let numTwo = "";
let operator = "";
let result = "";

// function addDot() {

// }

function deInput() {
    if (operator == "") {
        numOne = numOne.substring(0, numOne.length - 1);
        displayTwo.textContent = numOne;
}   else {
        numTwo = numTwo.substring(0, numTwo.length - 1);
        displayTwo.textContent = numTwo;
    }   
}

function addDot(a) {
    if (operator == "") {
        numOne += a;
        displayTwo.textContent = numOne;
}   else {
        numTwo += a;
        displayTwo.textContent = numTwo;
    }
}

function addNumber(a) {
    if (operator == ""){
        numOne += a;
        displayTwo.textContent = numOne;
} else {
        numTwo += a;
        displayTwo.textContent = numTwo;
    }
}

function addOperator(a) {
    operator = a;
    displayOne.textContent = numOne + " " + operator;
    displayTwo.textContent = "";
}

function operate() {
    if (operator == "%") {
        result = Math.round(parseFloat((numOne) % parseFloat(numTwo)) * 1000) / 1000;
        numOne = result;
        operator = "";
        numTwo = "";
        displayTwo.textContent = result;
        displayOne.textContent = "";
}   else if (operator =="/") {
        result = Math.round(parseFloat((numOne) / parseFloat(numTwo)) * 1000) / 1000;
        numOne = result;
        operator = "";
        numTwo = "";
        displayTwo.textContent = result;
        displayOne.textContent = "";
}   else if (operator == "*") {
        result = Math.round(parseFloat((numOne) * parseFloat(numTwo)) * 1000) / 1000;
        numOne = result;
        operator = "";
        numTwo = "";
        displayTwo.textContent = result;
        displayOne.textContent = "";
}   else if (operator == "-") {
        result = Math.round(parseFloat((numOne) - parseFloat(numTwo)) * 1000) / 1000;
        numOne = result;
        operator = "";
        numTwo = "";
        displayTwo.textContent = result;
        displayOne.textContent = "";
}   else {
        result = Math.round(parseFloat((numOne) + parseFloat(numTwo)) * 1000) / 1000;
        numOne = result;
        operator = "";
        numTwo = "";
        displayTwo.textContent = result;
        displayOne.textContent = "";
    }
}

function restart() {
    numOne = "";
    numTwo = "";
    operator = "";
    displayOne.textContent = "";
    displayTwo.textContent = "";
}



cBtn.addEventListener("click", () => restart());
deBtn.addEventListener("click", () => deInput());
modulo.addEventListener("click", () => addOperator("%"));
devide.addEventListener("click", () => addOperator("/"));
minus.addEventListener("click", () => addOperator("-"));
plus.addEventListener("click", () => addOperator("+"));
multiply.addEventListener("click", () => addOperator("*"));
dot.addEventListener("click", () => addDot("."));
zero.addEventListener("click", () => addNumber("0"));
one.addEventListener("click", () => addNumber("1"));
two.addEventListener("click", () => addNumber("2"));
three.addEventListener("click", () => addNumber("3"));
four.addEventListener("click", () => addNumber("4"));
five.addEventListener("click", () => addNumber("5"));
six.addEventListener("click", () => addNumber("6"));
seven.addEventListener("click", () => addNumber("7"));
eight.addEventListener("click", () => addNumber("8"));
nine.addEventListener("click", () => addNumber("9"));
equal.addEventListener("click", () => operate());

