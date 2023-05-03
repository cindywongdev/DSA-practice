// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

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

console.log("Max is:", findMax([-1, -4, -2]))

function factorial(n){
    // This function returns the factorial of a given number.
    let factorial = 0

    // handle exception: if n = 1
    if (n === 1) {
        return 1
    }

    function rFactorial(currFactorialValue = n){
        // base case
        if (n === 1) {
            return factorial
        } else {
            // action
            factorial = currFactorialValue * (n - 1)
            console.log("f value:", factorial)
            // decrement n
            n -= 1
            console.log("n is:", n)

            // recursive case
            return rFactorial(factorial)
        }
    }

    return rFactorial()
}

console.log("Factorial is:", factorial(5))

function fibonacci(n){
    // This function returns the Nth number in the fibonacci sequence.
    // https://en.wikipedia.org/wiki/Fibonacci_number
    // For this function, the first two fibonacci numbers are 1 and 1

    let finalValue = 0
    let currPosition = 2
    let fibArr = [1, 1]

    // handle special cases
    if (n === 1) {
        return finalValue = fibArr[0]
    }

    if (n === 2) {
        return finalValue = fibArr[1]
    }

    function rFibonacci(){
        // base case
        if (currPosition === n){
            return finalValue
        }

        // action
        // reassign finalValue to the sum of the element 2 indexes to the left and the element 1 index to the left
        finalValue = fibArr[currPosition - 2] + fibArr[currPosition - 1]
        // push that value into the array so future recursive calls can use it
        fibArr.push(finalValue)

        currPosition += 1

        // recursive case
        return rFibonacci()
    }
    
    // call r helper function
    return rFibonacci()
}

console.log("final value is:", fibonacci(8))

function coinFlips(n){
    // This function returns an array of all possible outcomes from flipping a coin N times.
    // Input type: Integer
    // For example, coinFlips(2) would return the following:
    // ["HH", "HT", "TH", "TT"]
    // H stands for Heads and T stands for tails
    // Represent the two outcomes of each flip as "H" or "T"

    // handle exception
    if (n <= 0) {
        return ['']
    }

    // initialize variables
    let outcomes = []

    function rCoinFlip(n, outcomes, current){
        // base case
        if (n === 1){
            // this runs for the last flip, so add the result to the array
            outcomes.push(current + "H")
            outcomes.push(current + "T")
        // here we NEED the else clause because the if clause doesn't have a return, so all of function will run even if base case is hit, recurring into infinity
        } else {
            // action
            // recursive cases
            // current ACCUMULATES with each recursive call, covering both the H and T branches, each time
            rCoinFlip(n - 1, outcomes, current + "H")
            rCoinFlip(n - 1, outcomes, current + "T")
        }
    }

    rCoinFlip(n, outcomes, '')
    return outcomes
}

console.log(coinFlips(2))

function letterCombinations(){
    // This function returns an array of all combinations of the given letters
    // Input type: Array of single characters
    // For example, letterCombinations(["a","b","c"]) would return the following:
    // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}