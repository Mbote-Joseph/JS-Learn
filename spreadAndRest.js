function sumValues(...values) {
  return values.reduce((a, b) => a + b);
}

console.log(sumValues(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
