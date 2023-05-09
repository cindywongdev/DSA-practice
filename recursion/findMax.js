function findMax(arr){
    // This function returns the largest number in a given array.
    let index = 0
    // assign max to first element of array
    // because if we assign max 0, it wont work for an array of negative numbers, because 0 is larger than all negatives
    let max = arr[0]

    function rMax(){
        // base case
        if (index === arr.length){
            return max
        }

        // action
        // check if element of array we are iterating over is greater than current max. if yes, reassign max to the current array element
        // if (arr[index] > max) {
        //     max = arr[index]
        // }

        // ternary expression ver
        max = arr[index] > max ? arr[index] : max

        console.log("index:", index)
        console.log("current max:", max)

        // increment index
        index += 1

        // recursive case
        return rMax()
    }

    // call recursive function
    return rMax()
}

module.exports = findMax