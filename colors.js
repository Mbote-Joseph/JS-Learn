var red = document.getElementsByClassName("red");
var green = document.getElementsByClassName("green");
var yellow = document.getElementsByClassName("yellow");
var orange = document.getElementsByClassName("orange");
var cyan = document.getElementsByClassName("cyan");
var violet = document.getElementsByClassName("violet");
var pink = document.getElementsByClassName("pink");

var center = document.getElementsByClassName("center");

var getBG = (selectedColor) => {
  return window.getComputedStyle(selectedColor).backgroundColor;
};

var magicColorChanger = (element, color) => {
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
