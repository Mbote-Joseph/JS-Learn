var members = [
  {
    name: "Peter",
    age: 18,
    registration: "SCT211-0011/2018",
    date: "2018-01-01",
  },
  {
    name: "John",
    age: 20,
    registration: "SCT211-0012/2018",
    date: "2018-01-02",
  },
  {
    name: "Paul",
    age: 22,
    registration: "SCT211-0013/2018",
    date: "2018-01-03",
  },
  {
    name: "Mary",
    age: 24,
    registration: "SCT211-0014/2018",
    date: "2018-01-04",
  },
  {
    name: "Jane",
    age: 26,
    registration: "SCT211-0015/2018",
    date: "2018-01-05",
  },
];

function addMember(name, age, registration, date) {
  members.push({ name, age, registration, date });
}

addMember("Joseph", 28, "SCT211-0016/2018", "2018-01-06");
addMember("Mbote", 30, "SCT211-0017/2018", "2018-01-07");

console.log(members);
