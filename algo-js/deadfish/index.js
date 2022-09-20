let string = "iiisxxxdoso";

function stringToArray(string) {
  let array = [];
  let value = 0;
  for (let el of string) {
    switch (el) {
      case "i":
        value++;
        break;
      case "s":
        value **= 2;
        break;
      case "d":
        value--;
        break;
      case "o":
        array.push(value);
        break;
    }
  }
  return console.log(array);
}

stringToArray(string)
