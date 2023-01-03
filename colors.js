let red = document.getElementsByClassName("red");
let green = document.getElementsByClassName("green");
let yellow = document.getElementsByClassName("yellow");
let orange = document.getElementsByClassName("orange");
let cyan = document.getElementsByClassName("cyan");
let violet = document.getElementsByClassName("violet");
let pink = document.getElementsByClassName("pink");
let center = document.getElementsByClassName("center");

let getBG = (selectedColor) => {
  return window.getComputedStyle(selectedColor).backgroundColor;
};

let magicColorChanger = (element, color) => {
  return element.addEventListener("mouseenter", () => {
    center[0].style.backgroundColor = color;
  });
};

magicColorChanger(red[0], getBG(red[0]));
magicColorChanger(green[0], getBG(green[0]));
magicColorChanger(yellow[0], getBG(yellow[0]));
magicColorChanger(orange[0], getBG(orange[0]));
magicColorChanger(cyan[0], getBG(cyan[0]));
magicColorChanger(violet[0], getBG(violet[0]));
magicColorChanger(pink[0], getBG(pink[0]));
