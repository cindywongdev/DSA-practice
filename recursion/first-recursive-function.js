// step 1: function and parameters
// parameters are important!
// give index and sum default values so that they don't need to be provided on the first call of the function

function sumArrayOfNums(arr, index = 0, sum = 0){
    // base case: when function can stop and return result
    if (index === arr.length){
        return sum
    }

    // action
    sum += arr[index]
    console.log(sum)

    // recursive case
    // must use return keyword
    // so that the final return value is returned
    // otherwise, final return value won't go behind second-to-last recursive call
    return sumArrayOfNums(arr, index + 1, sum)
}

console.log(sumArrayOfNums([2, 4, 5, 8]))