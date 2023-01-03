// Array
// Objects
// Loops

// method 1
var courses = [
  "Object Oriented Programming",
  "JavaScript",
  "Python",
  "C++",
  "Java",
  "C#",
];

console.log(`Courses: ${courses}`);
// Adding an element to the start of an array
courses.unshift("PHP");
courses.push("React Native");

console.log(
  `After adding an ele,ent at the start of the array ${courses.length}`
);

// Removing an element from the start of an array
courses.shift();
console.log(`After Removing an element from the array ${courses.length}`);

// Removing an element from the end of an array
courses.pop();
console.log(`After Removing an element from the array ${courses.length}`);

// Removing an element from the middle of an array
courses.splice(2, 1);
console.log(`After Removing an element from the array ${courses.length}`);

for (var i = 0; i < courses.length; i++) {
  console.log(courses[i]);
}

// method 2
var counties = new Array("Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret");
console.log(counties.length);

console.log(counties.forEach((county) => console.log(county)));
