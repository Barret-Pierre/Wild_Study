const string = "bitcoin take over the world maybe who knows perhaps"

function shortestWord(string) {
    const array = string.split(" ")
    let minlength = array[0].length;
    for(let word of array) {
        if(minlength > word.length ) {
            minlength = word.length
        }
    }
    return minlength
}

console.log(shortestWord(string)) 