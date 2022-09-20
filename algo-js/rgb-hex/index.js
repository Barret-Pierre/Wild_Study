function rgb(r, g, b) {
  const array = [r, g, b];
  let arrayVerif = array.map((el) => {
    if (el < 0) {
      el = 0;
    }
    if (el > 255) {
      el = 255;
    }
    return el;
  });
  let arrayHex = arrayVerif.map((el) => el.toString(16).padStart(2, "0"));
  console.log(arrayHex.join("").toUpperCase());
}

rgb(0, 0, 0);
rgb(300, 0, 0);
rgb(300, 255, 255);
rgb(0, 0, -20);
