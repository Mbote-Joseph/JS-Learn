console.log("Hello JavaScript!");

// Interacting with the DOM
const title = document.getElementsByClassName("title")[0];
title.innerHTML = "Hello JavaScript!";

// Interacting with the DOM using the querySelector method
const test = document.querySelector("h3");
test.innerHTML = "The DOM is awesome!";

function showValue(number = 1) {
  const value = document.querySelector("p");
  number = parseInt(number);
  value.innerHTML = `The DOM value is  ${number + 1}`;
}
