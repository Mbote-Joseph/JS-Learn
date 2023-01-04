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

(() => {
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
      const price = document.createTextNode("$" + course.price);
      span.appendChild(price);
      li.appendChild(span);
    });
  }
  generateList();
})();