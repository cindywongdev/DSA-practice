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
* Efficiency of Linked Lists
    * basic functions to perform on data structures
        * access
        * search
        * insertion
        * deletion
    * efficiency of a data structure = how long it takes to perform these basic functions on them

    | Data Stucture | Access | Search | Insertion | Deletion |
    |---------------|--------|--------|-----------|----------|
    |     Array     | 0(1)   | 0(N)   | 0(N)      | 0(N)     |
    | Linked List   | 0(N)   | 0(N)   | 0(1)      | 0(1)     |

    * Access
        * Arrays are 0(1) bc we can use the index to find the nth element
        * but linked lists dont have indexing so we'd have to count from the beginning all the way up to nth element, which in the worst case would be through the entire array of size N
    * Search
        * search is 0(N) for both bc we'd have to go through each element to find the element we are looking for
    * Insertion
        * Head: name of first node, default pointer is null when there's only 1 element
        * default (and easiet) place to add a new node is at the end of a linked list
        * find last node by looking for the node with **null** as its **next** value
            * then, we can change that node's **next** property to the new node we're inserting into the list
* Traversing a Linked List
    * In order to access, search, or manipulate a linked list, we first need to write code that traverses the list
    * Traversing has to start at the __head__ and then use the __next__ pointers to iterature through the list:
        ```
            let walker = this.head
            while (walker.next){
                walker = walker.next
            }
        ```
        * the variable walker is dynamically reassigned each next value of the linked list as it traverses it
    * To search or access a specific point in the list, we could write a conditional inside the loop
* The Importance of Next Pointers
    * When inserting or deleting a node, you're basically manipulating pointers
    * Danger when inserting/deleting in middle of list: accidentally breaking a pointer (a pointer loses reference to the rest of the list), making it impossible to reference the rest of the list
* Singly vs Doubly Linked List
    * Double Linked List: same as single, but also points in reverse direction
        * allows us to traverse a list backwards
        * in addition to  __data__ and __next__ properties in a double linked list's nodes, they also have
            * a __previous__ property that points to the previous item in the list
        * Pro: gives you more mobility than a singly linked list
        * Con: much more complicated to manipulate -- you have to manage both next and previous pointers
* Uses for Linked Lists
    * uncommon to be used by itself
        * usually used as basis for other data structures such as stacks and queues
    * A playlist of songs = a doubly linked list
        * bc each song points to both the previous and next songs
    * An image viewer/carousel
        * images are linked to both the previous and next images
    * Some file systems
        * files are usually stored in chunks with a determined size
        * but when files get too larger, the chunks of the original file link to the next section of a file that's stored in another node

### Stacks and Queues

* Behavior
    * Stacks: last in, first out (LIFO)
        * last item added is first item removed
    * Queues: first in, first out (FIFO)
        * first item added is first item removed
        * items are removed in the order they were added
* Examples in Programming
    * Stack:
        * back button, undo, cmd-Z
            * pulls from the most recent action
        * **the function call stack**
            * when you call a function to execute, it is pushed to the top of the stack
            * it runs until we add another function to the stack, which then runs until it returns (or another function is pushed to the top)
            * you can keep adding functions until you run out of space in the stack, aka you've reached stack overflow :o
    * Queues:
        * sending documents to printer
            * printer prints them in the order they were sent (FIFO)
        * computer processing unit (CPU) scheduling
            * tasks are executed in the order they were called (ex. first clicking new tab and then typing url in)
            * tasks further down the queue are put on hold until resources are available
* Stack & Queue Actions
    * the same relatively limited set of actions can be performed on both stacks and queues
    * tradeoff: limited functionality = GREAT RUNTIMES!!! 0(1)!!!

    | Function | Name in a Stack | Name in a Queue | Complexity |
    |----------|-----------------|-----------------|------------|
    | Access   | Peek            | Peek            | 0(1)       |
    | Insert   | Push            | Enqueue         | 0(1)       |
    | Delete   | Pop             | Dequeue         | 0(1)       |
    | Check empty | isEmpty      | isEmpty         | 0(1)       |

* Implementations
    * both stacks and queues can be implemented as arrays or linked lists
    * either way, theres no major diff between which data structure you choose to implement with
        * choose depending on how your data is already structured
        * and how you expect to be inserting or removing elements
    * Stacks
        * Linked List Implementation: check files
        * Array Implementation: check files
    * Queues
        * Linked List Implementation: check files
        * Array Implementation: check files

* Variations on a Queue
    * The Priority Queue
        * in addition to regular queue rules:
            * 1. every element has a priority associated with it
            * 2. an element with a high priority is dequeued before an element with low priority
            * 3. if two elements have same priority, they are served according to their order in the queue
        * IRL: just like priority boarding for a plane
        * Programming: CPU scheduling is commonly implmenented as a priority queue
    * The Double-Ended Queue (Deque for short)
        * performs insertions and deletions at BOTH ends
            * rather than just insertions at end and deletion at front
        * usually implemented with doubly linked list or dynamic array
        * often used for task scheduling algorithms
        * IRL: like when you're last in line at a grocery store but a new register opens up and you get to go first
        * Programming: spreading tasks between diff servers
            * each server has double ended queue
            * moves thru it's queue as normal
            * BUT, if a server finishes running thru its queue and has an empty one, it can take tasks from the END of another server's queue :) nice!

### Hash Tables

* Hash Functions
    * takes a recognizable input and modifies it (hashes it) to produce an outcome (that is not necessarily recognizable)
        * like hashing a password
    * takes a key (ex. string, int) for a data record (usually a key-value pair)
        * returns an integer memory address or index in a table where that record can be stored
        * basically, maps a key from the large pool of possible keys to a much smaller rang of possible indices in a hash table (so that info will be much quicker to find)
* Collisions
    * when two pieces of info are placed in the same memory address
* Linear Hash/Linear Probing
    * resolves collisions
    * like hashSimple, which is:
        * basically a function that returns a memory address for each input
    * but if it returns a memory address that is already taken, add 1 to index until you find an address that isn't occupied (if you reach the end, go back to index 0 and keep going)
* Chaining
    * resolves collisions
    * if hash function returns a memory address that is already taken, just chain the input to the already occupied address (like building a 2nd floor on top of an occupied apartment)
    * each slot of the hash table can containe what is considered a "bucket", which can hold multiple records
    * buckets themselves are data strctures where you can put as many keys/records as you like

* Quick Generation -- it's important that an address in memory or index in an array can be calculated quickly
* Hash Table: a data structure that uses a key to sort an index into a table