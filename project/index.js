let Courses = [
  { name: "HTML", price: 200 },
  { name: "CSS", price: 300 },
  { name: "JS", price: 400 },
  { name: "React", price: 500 },
  { name: "Node", price: 600 },
  { name: "MongoDB", price: 700 },
  { name: "Express", price: 800 },
  { name: "Python", price: 900 },
  { name: "Django", price: 1000 },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  Courses.forEach((course) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const name = document.createTextNode(course.name);
    li.appendChild(name);
    ul.appendChild(li);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price);
    li.appendChild(span);
  });
}
generateList();

// sort Courses by price in ascending order
function sortCourses() {
  Courses.sort((a, b) => a.price - b.price);
  generateList();
}

// sort Courses by price in descending order
function sortCoursesDesc() {
  Courses.sort((a, b) => b.price - a.price);
  generateList();
}

(function () {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      let joke = data.value;
      console.log(joke);
      document.getElementById("joke").innerHTML = joke;
    })
    .catch((err) => {
      console.log(err);
    });
})();

(function () {
  setTimeout(function () {
    window.location.reload();
  }, 20000);
})();
