const string = "S Harris";

function abbrevName(string) {
    const array = string.split(" ")
    const newArray = array.map(el => el.substring(0,1))
    return newArray.join('.')
}

console.log(abbrevName(string))


