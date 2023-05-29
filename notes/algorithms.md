# Algorithms Notes
###### based on GA Dash's Algorithms Course

### Intro to Algorithms

* Algorithm: essentially is a set of steps to take to achieve a specific goal

* Time complexity: number of steps required
* Space complexity: memory usage (RAM)

### Big O Notation

* Types of Complexity
    * Constant Complexity
        * Big O: 0(1)
        * Constant space and time complexity
        * Pretty efficient in relation to input size
        * Uses same amount of memory and same number of steps no matter the input size
        * The function will run once, no matter the size of the input
        * * not necessarily the fastest— just means its efficiency (space and time complexity) remains CONSTANT
            * So if its slow w one input, it’ll be just as slow w 1000
            * Vice versa: if fast with one input, it’ll be just as fast w 1000
        * Code examples:
            * A simple hello world function that console logs
    * Linear Complexity
        * Big O: 0(N)
        * As input size increases, processing time increases linearly
        * Still pretty efficient in relation to input size
        * One extra input = one more step for code to perform
        * The (N) indicates that the code will run ONCE for EVERY input value
        * Code examples:
            * Any for loop
            * Any function that uses for loop
                * Ex. forEach, map
    * Quadratic Complexity
        * BigO: 0(N^2)
        * VERY INEFFICIENT
        * Ex. Nested loops
            * For an array of N length, each iteration of the first loop contains a loop that iterates N times
            * For a total of N*N loops (or steps)
        * Should be AVOIDED whenever possible!
    * Logarithmic Complexity
        * Big O: 0(log(N))
        * HIGHLY EFFICIENT
        * Cuts problem in half on each run
        * Doesn’t require log calculation despite the name
        * Real life example: randomly flipping to a phone book page (alphabetical) and then going back or forth depending on how close you are to the name you’re looking for
        * ^ an example of binary search, a classic 0(log(N)) algorithm
    * Factorial Complexity
        * Big O: 0(N!)
        * VERY BAD, AVOID
        * example: bogosort aka slow sort
            * Ex. An array of 10
            * method: randomly order array over and over again until it is sorted correctly
            * Possible rearrangements: 10! —> 3,628,000
* Rules of Calculating Big-0
    * Drop coefficients
        * Bc we only care abt big picture
        * Ex. 0(2N) => 0(N)
    * Drop constants
        * Ex. 0(N + N^2) => 0(N^2)
        * Ex. 0(N + 1) => 0(N)


### Recursion

* Recursion: when a function calls itself
    * To complete a large task, a recursive function achieves a part of the task, then passes the partially completed problem to another call of itself
    * 3 parts of a recursive function
        * Base case: when the process stops, like the TERMINAL CONDITION in a loop
            * Function can finally return a SPECIFIED value instead of calling itself again
        * Action: the middle code that function runs
        * Recursive case: calling the function again but slightly altered (the input) so that progress is being made towards the base case
    * Recursive Helper Functions
        * A non-recursive parent function holds a recursive helper function
        * Info is stored in parent scope as variables
        * Useful for combination problems, when each recursive function might be calling itself multiple times with different inputs
    * Why Recursion?
        * For simple problems, recursion and for loops are just as effective
        * And iteration uses less memory space
        * But for more complex problems, recursion makes sense
            * Written more cleanly
            * Less code
        * But its not a hard and fast rule, ppl have opinions
        * Its up to you and what you think makes sense for the problem
    * When to use it?
        * When exploring multiple possibilities or paths
        * Ex.
            * Calculating all possible combinations of elements
            * Checking all possible routes between two destinations

### Intro to Sorting Algorithms

* The 2 Major Types
    * Comparison Sort
        * compares 2 items and decides which one to put first
    * Distribution Sort
        * groups items based on some characteristic about the items (ex. color)
    * These 2 sorts function differently
        * Thus, they are better suited for different types of data sets.

* Stability
    * preserves the initial order of a collection
    * allows you to sort by one factor first, and then another, while preserving the order of the first
    * ex. sorting a deck of cards numerically, and THEN sorting them by suits 
        * end result of a stable sort: they would be divided into groups by suits, and each group would be sorted numerically

* Quick Review of Time & Space Complexity + More
    * Time Complexity: given an input of size N, the max # of calculations you will need to perform
    * Space Complexity Types
        * In place
            * big O complexities: 0(1) or 0(log(N))
            * algorithm takes a predictable amount of space
            * this space does not depend on the size of the input
        * Out of place
            * big O complexities: 0(N), 0(N^2)
            * the algorithm uses an extra array (or more) into which to sort the values
    * The Worst, Best, and Average
        * Best case: Big Omega Ω
            * describes how efficiently an algo would run if it performed the fewest possible actions on a data set
                * ex. sorting an already sorted set
        * Average case: Big Theta Θ
            * describes the typical runtime of an algorithm
* Other Considerations When Choosing A Sort
    * Stability (whether or not items stay in order)
    * Sorting method (comparison, distribution, or a combo of the two)
    * The data itself:
        * Size (small, very large)
        * Structure (sorted, unsorted, only one out of place, few unique values, etc.) See [this cool video](https://www.youtube.com/watch?v=ZZuD6iUe3Pc&embeds_referring_euri=https%3A%2F%2Fmy.generalassemb.ly%2F&embeds_referring_origin=https%3A%2F%2Fmy.generalassemb.ly&source_ve_path=MjM4NTE&feature=emb_title&ab_channel=ViktorBohush)
* There is no perfect sort
    * Different sorts are good at different things