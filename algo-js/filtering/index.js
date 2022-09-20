let array = [1, 2, "a", "b"];

function filter_list(array) {
  const newArray = array.filter((el) => Number.isInteger(el));
  return newArray;
}

console.log(filter_list(array));
