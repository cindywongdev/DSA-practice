// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function findMax(arr){
    // This function returns the largest number in a given array.
    let index = 0
    let max = 0

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

console.log("Max is:", findMax([3,4,27,13,84,1,2]))

function factorial(){
    // This function returns the factorial of a given number.
}

function fibonacci(){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}