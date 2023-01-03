var results = [2, 3, 4, 5, 6, 7].every((num) => num % 2 === 0);
console.log(results);

var results = [2, 3, 4, 5, 6, 7].some((num) => num % 2 === 0);
console.log(results);

var results = [2, 3, 4, 5, 6, 7].filter((num) => num % 2 === 0);
console.log(results);

var results = [2, 3, 4, 5, 6, 7].map((num) => num * 2);
console.log(results);

var results = [2, 3, 4, 5, 6, 7].reduce((acc, num) => acc + num);
console.log(results);

var results = [2, 3, 4, 5, 6, 7].fill(0);
console.log(results);
