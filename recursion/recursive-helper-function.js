// same as first-recursive-function, but modified into helper function

// non-recursive parent function contains recursive-helper function

function sumArrayOfNums(arr){
    // info is stored in parent scope as variables
    // instead of in parameters!
    // useful for combination problems, when each recursive function might be calling itself multiple times with different inputs
    let index = 0
    let sum = 0

    function rSum(){
        // base case
        if (index === arr.length){
            return sum
        }

        // action
        sum += arr[index]
        index += 1

        // recursive case
        return rSum()
    }

    // call the helper function!
    // also need a return
    return rSum()
}

console.log(sumArrayOfNums([2, 4, 5, 8]))