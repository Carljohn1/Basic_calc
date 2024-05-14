function calc() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("heading");
  result.innerText = num1.value - num2.value;
  console.log("Calculate the result");
}
function add() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("heading");
  result.innerText = num1.value + num2.value;
  console.log("Addition");
}

function sub() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("heading");
  result.innerText = num1.value - num2.value;
  console.log("Addition");
}

function mul() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("heading");
  result.innerText = num1.value * num2.value;
  console.log("Addition");
}

function div() {
  let num1 = document.getElementById("num1");
  let num2 = document.getElementById("num2");
  let result = document.getElementById("heading");
  result.innerText = num1.value / num2.value;
  console.log("Addition");
}
