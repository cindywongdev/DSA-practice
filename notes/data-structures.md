# Data Structures Notes
###### based on GA Dash's Data Structures Course

### Intro to Data Structures
* stores data in a specific way, depending on the structure chosen
* each structure's efficiency depends on the type of action you intend to do
    * no one data structure is equally efficient for all actions
    * some structures don't support certain actions at all
* The Array
    * simplest, most commonly used data structure across all programming languages
    * a collection of items that can be accessed individually via an index that lists the position of items in that array
    * Key Characteristics
        * are indexed (most languages start at 0)
        * are either fixed size (Java, C) or changeable size (JavaScript, Ruby)
        * are usually restricted to one data type (only integers, strings, Booleans, etc.)
    * Typical Operations (consistent across most prog languages)
        * myArray = [1,2] // creates a new array with the values of 1 and 2
        * myArray = newArray(size) // creates a new array of length (size)
        * myArray.length // returns the size of the array
        * myArray[i] // returns the value at index [i] in the array
        * myArray[i] = value // sets the value at index [i] to new value
    * Using Arrays
        * a great choice for storing data when you KNOW the exact SIZE of the data set
            * ex. array of average temp in past week:
            * let weatherData = [54, 57, 51, 51, 55, 58, 56]
        * But, there are some questions it cant immediately answer without writing extra code, such as:
            * did any two days have the same average temperature?
            * which temp appears the most
* The Types of Data Structures
    * Linked Lists: lists that store data inside of nodes that point to each other
    * Stacks: lists of order values in which the first item in is the last item out
        * FILO
        * like a stack of plates
    * Queues: lists of ordered values in which the first item in is the first item out
        * FIFO
        * like a queue of people
    * Hash Tables: list-like structures that use a hash function to generate keys for values
    * Sets: similar to an array, but can only contain UNIQUE values
    * Binary Trees: Node-based structures that store values using left and right pointers
    * Trees: Tree structures in whihc nodes can store lists of child nodes
        * almost always used for strings 
    * AVL Trees: a binary tree that's balanced
        * each side of the tree is a similar height, which means its balanced
    * Graphs: collections of nodes and edges in which nodes store data and edges represent connections between data

### Linked Lists
* a foundational data structure that is used by many complex data structures
* key component: a node
    * in a linked list specifically, a node is a unit containing 2 things at the same time
        * a **data** property that stores a value
        * a **next** property, sometimes called a "pointer", that points to the next item in the list
    * the only exception to this rule in a linked list is the last item, which doesn't need a pointer
        * this last item is known as a "null next node" or "the tail"
* Linked List vs Array
    * An array needs a continous block of memory to store its elements, so it is difficult to expand
    * But a linked list can use pointers to point to different memory addresses, allowing it to expand without limitations
* Pros and Cons of Linked Lists
    * Pros: can keep growing and adding nodes
    * Cons:
        * Take up more space than arrays
            * because you have to store both the data AND pointers
        * Can take more time to access a linked list bc the data isn't read as one continous chunk (you have to travel to all memory addresses)
        * Can't access a particular node in linked list without starting from the top and moving sequentially until you find it
            * wheres in an array, you can quickly find a value based on its index