"use strict";
const array = [2, 1, 1];
function findUniq(array) {
    let numToReturn = array[0];
    for (let number of array) {
        let counter = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === number) {
                counter++;
                if (counter > 1) {
                    break;
                }
            }
        }
        if (counter <= 1) {
            numToReturn = number;
            break;
        }
    }
    return numToReturn;
}
console.log(findUniq(array));
