const fullName = "Joseph Mbote";

var course = "JavaScript for Beginners";
console.log(`Hello ${fullName}!`);
var isLoggedIn = true;
var loggedCount = 34;

// var title = document.querySelector("h1");
// title.innerHTML = course;

// var subscribe = document.querySelector("button");

// if (isLoggedIn) {
//   subscribe.textContent = "Unsubscribe";
// } else {
//   subscribe.textContent = "Subscribe";
// }

function showValue() {
  isLoggedIn = !isLoggedIn;
  if (isLoggedIn) {
    subscribe.textContent = "Unsubscribe";
  } else {
    subscribe.textContent = "Subscribe";
  }
}

var email = "mbotejoseph001@gmail.com";
var password = "123456";
var confirmPassword = "123456";

var courseCount = 0;

console.log(`
    With Unique ID: ${email}
    User password: ${password}
    User confirmed password: ${confirmPassword}
    User is logged in: ${isLoggedIn}
    User has logged in ${loggedCount} times
    User is subscribed to ${courseCount} courses
`);

// console.log(document.body);

// var element = document.createElement("p");
// element.textContent = "This is a new element from JavaScript";
// document.body.appendChild(element);

// window.alert("Hello JavaScript!");
