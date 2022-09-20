let string = "Hello world !";

// Converti la chaine de caractère en Ascii
function convertInAscii(string) {
  let stringInAscii = [];
  for (letter of string) {
    stringInAscii.push(letter.charCodeAt(0));
  }
  return stringInAscii;
}

// Converti un tableau Ascii en chaine de caractère binaire
function convertAsciiInBin(array) {
  const arrayConverted = array.map((letter) => {
    return addZero(letter.toString(2));
  });
  return arrayConverted.join(" ");
}

// Ajoute des zero à la chaine de caractère tant que sa longueur ne respecte pas celle d'un octet
function addZero(string) {
  return string.padStart(8, "0");
}

console.log(convertAsciiInBin(convertInAscii(string)));
