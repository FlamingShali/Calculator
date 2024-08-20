"use strict";

let summary = document.querySelector(".calculator-box__summary");
const btnAdd = document.querySelector(".btn-box__add");
const btnSubstraction = document.querySelector(".btn-box__substraction");
const btnMultiplication = document.querySelector(".btn-box__miltiplication");
const btnDivide = document.querySelector(".btn-box__divide")

function clearInputFields() {
  numberA.value = 0;
  numberB.value = 0;
  summary.value = 0;
}

function add() {
  let numberA = document.querySelector(
    ".calculator-box__input--number-1"
  ).value;
  let numberB = document.querySelector(
    ".calculator-box__input--number-2"
  ).value;
  
  summary.innerHTML = `${Number(numberA) + Number(numberB)}`;
}
function substraction() {
    let numberA = document.querySelector(
        ".calculator-box__input--number-1"
      ).value;
      let numberB = document.querySelector(
        ".calculator-box__input--number-2"
      ).value;
      
      summary.innerHTML = `${Number(numberA) - Number(numberB)}`;
}
function miltiplication(a, b) {
    let numberA = document.querySelector(
        ".calculator-box__input--number-1"
      ).value;
      let numberB = document.querySelector(
        ".calculator-box__input--number-2"
      ).value;
      
      summary.innerHTML = `${Number(numberA) * Number(numberB)}`;
}
function divide(a, b) {
    let numberA = document.querySelector(
        ".calculator-box__input--number-1"
      ).value;
      let numberB = document.querySelector(
        ".calculator-box__input--number-2"
      ).value;
      
      summary.innerHTML = `${Number(numberA) / Number(numberB)}`;
}

btnAdd.addEventListener("click", add);

btnSubstraction.addEventListener("click", substraction);
btnMultiplication.addEventListener("click", miltiplication);
btnDivide.addEventListener("click", divide);
