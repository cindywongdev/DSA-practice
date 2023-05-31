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
    * preserves the sorted order of a collection as you complete more iterations
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

### Basic Comparison Sorting Algorithms (Bubble & Insertion Sort)

* like the long division of basic sorts:
    * slow, inefficient, infrequently used
    * but are important to understand the foundations of sorting algos and prepare you to understand more complex sorting algos
* Bubble Sort
    * iterates through a data set and compares neighboring numbers, swapping current number with the next one if the next one is smaller
    * basic process
        * 1. Start at the beginning of an array of items
        * 2. Compare the current item you're looking at to the next item on the list (item at index i vs. i + 1)
        * 3. If current item is smaller than the next item, keep it in place. If it's greater, swap the two.
        * 4. Move on to the next item.
        * 5. Once end of array is reached, go BACK to beginning of array and repeat steps 1-4 until you can go through the whole list without making any swaps.
    * Stability: stable
        * items remain sorted as you iterate through array multiple times
    * Big O Space Complexity: 0(1)
        * Why? Bc we didn't have to find a new space for any of the elements while sorting them. The amount of space used doesn't change as the input increases (we sort in place using the original array), so the space efficiency is 0(1).
    * Big O Time Complexity: 0(N^2)

* Insertion Sort
    * iterates through data set and inserts each item into the right place in the array
        * it's like drawing a hand of cards and sorting them into your hand on each new draw
        * also not efficient, but def faster than bubble sort and works for more situations
        * is mainly used IRL in conjunction with bucket sort
    * Process
        * 1. Start at beginning of array
        * 2. Splits array into two sections: a sorted and unsorted one. Sorted on is the first element by default.
        * 3. Moves on to next element (becomes current element), finds the FIRST item that is smaller than current element and places it after that item. If there is no smaller item to be found, place current item at beginning of sorted section.
        * 4. Repeat step 3 until all items are sorted.
    * Stability: stable
        * items remain sorted as you move onto next element and sort that one
    * Big O Space Complexity: 0(1)
        * again, you're not creating new space for the elements, you're using the existing space (sorting in place), so space remains constant
    * Big O Time Complexity: 0(N^2)

### Distribution Sorting Algorithms (Bucket & Radix Sort)

* Types
    * Bucket Sort
        * sorts elements into buckets based on their value, and then uses ANOTHER method to sort the elements within those buckets
        * can be used for integers or strings
    * Radix Sort
        * same as bucket sort but works ONLY for integers

* How Many Buckets?
    * Depends on your data set
        * ex. sorting a LOT of elements alphabetically
            * could do 1 per letter => 26 buckets
        * ex. sorting numbers with radix sort
            * could do 1 per digit => 10 buckets
            * could do 1 per # of places in digit => X buckets (ex. max # is 3000, that would be 4 digits, so there would b 4 buckets)
    * General rule of thumb
        * use when theres no one obvious way to create your buckets
        * use the square root of the # of items to sort
            * ex. 100 items => 10 buckets
    