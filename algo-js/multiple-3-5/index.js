const number = 10;

function multiple(number) {
  let array = [];
  for (i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      array.push(i);
    }
  }
  return array.reduce((prev, curr) => prev + curr, 0);
}

console.log(multiple(number));
