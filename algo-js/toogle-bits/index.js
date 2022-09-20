let arrayDec = [14, 0, 120, 255, 0];
let arrayBits = [0, 1, 1];

function toogleBits(arrayBits, arrayDec) {
  if (arrayDec.length < arrayBits.length) {
    return console.log("Erreur le tableau de bits est trop grand");
  } else {
    for (i = 0; i < arrayBits.length; i++) {
      if (arrayBits[i] === 0) {
        if (arrayDec[i] % 2 !== 0 && arrayDec[i] < 255) {
          arrayDec[i]++;
        } else if (arrayDec[i] === 255) {
          arrayDec[i]--;
        }
      } else {
        if (arrayDec[i] % 2 === 0) {
          arrayDec[i]++;
        }
      }
    }
    return console.log(arrayDec);
  }
}

toogleBits(arrayBits, arrayDec);
