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

    //
}