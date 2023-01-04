let myMap = new Map();

myMap.set("name", "Joseph Mbote");
myMap.set("email", "mbote@gmail.com");
myMap.set("age", 23);

console.log(myMap);
// console.log(myMap.get("name"));

console.log(`========= Keys=============`);
for (let key of myMap.keys()) {
  console.log(key);
}

console.log(`========= Values=============`);
for (let value of myMap.values()) {
  console.log(value);
}
