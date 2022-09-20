let string = "Hello world !";

// Converti la chaine de caractère en Ascii
function convertInAscii(string) {
  let stringInAscii = [];
  for (letter of string) {
    stringInAscii.push(letter.charCodeAt(0));
  }
  return stringInAscii;
}

// Ajoute des zeros à la chaine de caractère tant que sa longueur ne respecte pas celle d'un octet
function addZero(string) {
  return string.padStart(8, '0');
}

// Converti un nombre de base 10 en base 2
function convertNumInOctet(int) {
  let intToReturn = "";
  while (int !== 0) {
    // permet d'inversé la chaine de charactère
    intToReturn = (int % 2) + intToReturn;
    int = parseInt(int / 2);
  }
  return addZero(intToReturn);
}

// Converti un tableau Ascii (tableau de nombre) en chaine de caractère binaire
function convertAsciiInBin(array) {
  const arrayConverted = array.map((letter) => {
    return convertNumInOctet(letter);
  });
  return arrayConverted.join(" ");
}

// Fait l'assemble de la conversion en ascii vers le décimal et le décimale vers la base 2
function convertStringInBin(string) {
  return convertAsciiInBin(convertInAscii(string))
}

console.log(convertStringInBin(string));
