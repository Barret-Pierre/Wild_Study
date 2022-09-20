const arrayData = [
  "Christophe",
  "Eric",
  "Oscar",
  "Soufiane",
  "Johan",
  "Ifeoma",
  "Natacha",
  "Alan",
  "Clément",
  "Émeline",
  "Félicie",
  "Gaetan",
  "Hexia",
  "JustineG",
  "JustineP",
  "Kevin",
  "Marcel",
  "Célian",
  "Ophélie",
  "Pierre",
  "Youcef",
  "Yann",
  "Yohann",
];

let arrayToReturn = [];

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

for (let i = 0; i < 2; i++) {
  const index = getRandomArbitrary(0, arrayData.length);
  arrayToReturn.push(arrayData[index]);
  arrayData.splice(index, 1);
}

console.log(arrayToReturn);
