const array: number[] = [ 2, 1, 1 ]

function findUniq(array: number[]): number {
    let numToReturn: number = array[0]
    for(let number of array) {
        let counter = 0
        for(let i=1; i < (array.length-1); i++) {  
            if(array[i] === number) {
                counter++ 
                if(counter > 1) {
                    break
                }
            }
        }
        if(counter <= 1) {
            numToReturn = number
            break
        }
    }
    return numToReturn
}

console.log(findUniq(array))