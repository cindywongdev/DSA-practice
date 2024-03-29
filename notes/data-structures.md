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
    * are either
      * static: fixed size (Java, C) 
      * dynamic: changeable size (JavaScript, Ruby, Python)
    * are usually restricted to one data type (only integers, strings, Booleans, etc.)
  * Typical Operations (consistent across most prog languages)
    * myArray = [1,2] // creates a new array with the values of 1 and 2
    * myArray = newArray(size) // creates a new array of length (size)
    * myArray.length // returns the size of the array
    * myArray[i] // returns the value at index [i] in the array
    * myArray[i] = value // sets the value at index [i] to new value
    * Big 0 Notation (for Static)
      * r/w at i-th location: 0(1)
        * due to nature of ram, u can just access it directly :)
      * insert/remove at end (assuming we have an empty space at the end): 0(1)
      * insert/remove at beginning/middle: 0(n)
    * Big 0 (for Dynamic)
      * push + pop: O(1)
        * bc there is always a pointer pointing to the last element in the array to keep track of it
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
  * Traversing has to start at the **head** and then use the **next** pointers to iterature through the list:

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
    * in addition to  **data** and **next** properties in a double linked list's nodes, they also have
      * a **previous** property that points to the previous item in the list
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
* Hash Table: a data structure that uses a key to sort an index into a table!

### Hash Tables (Deep Dive)

* Definitions
  * Hashing
    * appears in diff contexts
    * depending on context, has slightly diff definitions
    * most basic def:
      * take key (i.e. piece of data)
      * scramble it w/ an algorithm
      * return an index, which is used to sort the key into a hash table
  * Hash Function
    * the algorithm that scrambles keys in order to produce indices
    * only ONE RULE: for the SAME INPUT, the function should always return the SAME OUTPUT
      * rest is guidelines for hash function:
        * should be simple and efficient
        * should distribute values evenly throughout hash table
        * should avoid collisions
  * Hash Table
    * a list like data structure
    * designed to quickly store and retrieve key data records
    * in order to be stored, keys must be mapped using a hash function to the set of possible indices in the table or to addresses of a memory location

* Collisions
  * they don't break the cardinal rule of a hash function, which is SAME INPUT = SAME OUTPUT
  * in a collision's case, two DIFFERENT inputs produce the SAME output
  * Methods of Resolution
    * Open addressing (aka probing)
    * Closed addressing (aka chaining)

  * Open Addressing
    * basic concept: if the index generated for a key is already taken, jump to another place in the table to store your key
    * 3 Most Common Types of Open Addressing
      * 1. linear probing
      * 2. quadratic probing
      * 3. double hashing
    * Pros & Cons of Open Addressing
      * Pros
        * If you are aware of limits on the type and number of keys, table can be optimized at the start
        * Table can be completely filled up and space can be used more efficiently
        * Does not require additional data structures
      * Cons
        * More complex computation
        * Table can be completely filled up, preventing more values from being added in the future
        * Address where a key ends up being inserted does not necessarily correspond to (and cannot necessarily be predicted by) its hash value
          * e.g. a function that calculates a memory address, and if it is alr occupied, keeps trying the NEXT address until it finds an open one
            * ^ so this output may depend on what address is open, and what the state of the table looks like
            * therefore, the same input can produce a diff final output
    * Types of Open Addressing (Deep Dive)
      * Linear Probing
        * if the slot at the hashed index is occupied, look one slot to the right
        * keep going until an open slot is found
        * may cause clustering (if og hash function isn't set up carefully)
          * keys will be clumped together due to nature of this function (looking one to the right)
          * then, the function will have to iterate thru the entire cluster to reach an open space (vs. coming across open spaces scattered neatly throughout table)
      * Quadratic Probing
        * if slot at hashed index is occupied, square the number of steps you take to the right
          * i.e. take 1 step, then 4, 9, 16, 25, etc. until you find an open slot
      * Double Hashing
        * create a secondary hash function, which:
          * never returns 0
          * can return all addresses in the table
        * if slot at hashed index is occupied, hash that returned index using the secondary hash function
        * if that slot is ALSO occupied, multiply the index returned by second hash by 2, then 3, and so on.

  * Closed Addressing
    * aka chaining
    * each slot in hash table is built as a bucket that can hold as many keys as you want
      * so if hash function generates same index for 2 keys, no need to find another index -- just add them to the bucket
      * these buckets are usually implemented as a linked list
    * Pros & Cons
      * Pros
        * is a more elegant and simple approach to a hash table implementation
        * much simpler insertion and deletion
        * you can always add more data (no limit on space)
      * Cons
        * extra data structures require more memory and processing
        * some slots in table may never get used
        * a bad hash function might create v long chains, which decreases efficiency

* Chaining vs. Probing
  * any hash table implementation must include 3 basic methods:
    * search
    * insert
    * remove

    | Method | How Probing Does It | How Chaining Does It |
    |--------|---------------------|----------------------|
    | Search | hash the key, see if it's at that index, and probe until you find it or find an empty slot (?) | hash the key, then search the data structure at that index for that key |
    | Insert | hash the key, then put it at the generated index; if that index is taken, probe until you find an available one | hash the key, then store it in the data structure at that index |
    | Remove | do a search, then a deletion. BUT you must set an indicator that an element was deleted or a probe might stop there when it should keep jumping (?) | hash a key, then delete the data from the data structure located at that index |

* Direct Access Tables (Do Not Use)
  * a data structure that has the capability of mapping records to their corresponding keys using arrays
  * records are placed using their key values directly as indexed (e.g. a phone number as a key would be in index 3475834582)
    * but this array would have have a size of 10 billion
  * so they are time efficient but NOT space efficient
    * time efficient bc you know the exact slot where any value is stored
    * not space efficient bc of the ridiculous size

* Hash Tables in Use
  * Good for: situations where you need to locate and retrieve a record in a collection of millions/billions of entries
    * like accessing database records
    * or locating items in a comps memory
  * Example: a spellchecker
    * after a user presses the space bar
    * the word typed is pass through a hash function
    * if function returns a key that is in the hash table, it's spelled correctly
    * otherwise, it's mispelled

* Time Complexity
  * for search and insertion in a hash table
  * worst-case = 0(N)
    * would have to go thru every index or every element in a bucket to find a value, or to find an open space to insert a value
  * well written hash function can be 0(1)

### Sets

* Sets Basics
  * sets are also list structures
    * that hold sequences of UNIQUE values (unlike arrays, which can hold a sequence of any values)
  * Practical uses IRL (useful for storing..)
    * unique usernames in your database
    * a unique list of tags on all your blog posts
    * customer names
  * can store any type of data, even arrays or objects
  * how to get a set from a data set?
    * pass data set through a SET OBJECT ==> removes any duplicates (nice!)
* Common Set Methods

    | Method | Description |
    |--------|-------------|
    | .length | Returns the length of the set |
    | .insert(value) | Adds a value to set, unless it's already present |
    | .remove(value) | Removes and returns a value from the set |
    | .has(value) | Returns true if that value is already in the set |
    | .union(set) | Returns a new set comprising the union between the two previous sets (the set that invokes this method and the set passed as arg) (i.e. the combined values of both sets) |
    | .intersect(set) | Returns a new set comprising the intersection between two previous sets (i.e. the values in both sets) |
    | .difference(set) | Returns a new set comprising the difference between two sets (i.e. the valyes that only appeared in one of the two previous sets) |

### Binary Trees and Tries

* What's a tree?
  * a collection of nodes (where data is stored) and edges (connections between nodes)
  * characteristics common across all tree species (such as binary trees and tries)
  * and make then a bit diff from other node-based data structures (like linked lists)
    * each tree has a root node - a unique start node.
      * these usually are drawn as top of the tree
    * each node in a tree can only have 1 parent node
      * giving trees their hierarchical structure
      * thus, there is only ever 1 path from a given node back to the root
    * edges in a tree are sometimes called branches
    * leaves are nodes at the end of a tree that have no child nodes
    * a tree's height is equivalent to the length of the longest path from a leaf to the root
* Trees in Action
  * usually used in situations where data needs to be stored hierarchically
  * tree data structures IRL:
    * basic file storage (directory tree)
    * comment trees: where users can comment on comments
    * order of operations on calculator
    * Document Object Model (DOM) tree (nodes)
    * March Madness bracket (or any tournament w bracket system)
* Binary Trees
  * a species of tree with 1 defining feature: each nodes has AT MOST TWO branches
  * each node (except root) has 3 properties:
    * value: data in the node
    * left: points to a node w a lesser value than current node
    * right: points to a node w a greater value than current node
  * if node has no child elements, left and right props can be null
* Traversing a Binary Tree
  * fancy term for checking every node in a tree structure
    * ex. when you search for a node, insert a new one, or evaluate the size of a tree
  * possible methods
    * could use a while loop and a currentNode pointer, BUT this is not elegant code
    * we want to traverse multiple paths --> RECURSION :)
* Breadth-first vs Depth-first Search
  * Breadth-first:
    * searches all nodes at one level before moving onto next level
    * tries to stay as close to root as possible
  * Depth-first:
    * searches a node and it's child nodes and those nodes child nodes and so forth, until it reaches a dead end (leaf)
    * goes back to top and does it again
    * tries to get as far away from root as possible, as quickly as possible
  * Which is better?
    * Depends on...
      * the size and shape of your tree and
      * the type of data you're looking for

        | Breadth-first is better... | Depth-first is better... |
        |----------------------------|--------------------------|
        | If uk the val ur looking for is closer to the top | If uk the val ur looking for is closer to the bottom |
        | If ur tree is vv deep | If ur tree is vv wide |
        | When memory isn't a concern | When u needa be efficient w/ memory |
        | When ur tryna find the shortest path from root node to another node | When ur tryna understand dependencies in the data |
        | If u ONLY wanna use iteration | If u wanna use recursion |
* Tries
  * nodes can store more than 2 child nodes, can store a LIST of child nodes
  * just like tree, starts w/ empty root node that points to child nodes
  * each child node contains 2 types of data:
    * a value
    * references to other nodes, usually stored in an array
  * tries almost always store ALPHABETICAL data
    * value stores in a node is a single eltter
    * references are pointers to other letters that make up a word
* Adding to a Trie
  * first, check if word to be added is alr there
  * then add it
* Where Tries Stop
  * at the end of a path (like a binary tree)
  * OR, they can stop at a specified node that we indicate by adding a property to the node
    * ex. a trie of letters comprising multiple words, where 1 path = PICKED
    * PICK is also a word, so we would add an isWord property to the K node in that path so the trie knows this is a complete word and can return it there
* Tries in Action
  * ex. typing search query into Google and the autocomplete suggestions that come up
    * each letter type retrieves a subset of a much larger trie
  * Tries are usually used in conjunction w another data structure or some type of search algo

### Balancing Binary Trees

* What does an unbalanced tree look like?
  * Ex. if we keep adding nodes to a tree that were greater than the prev node
    * all nodes would move to the right, v unbalanced
    * tree basically becomes a giant linked list
      * we lose all efficiency gains that come along w a tree structure
      * would potentially have to iterate through entire thing to find a node
      * O(N)
* Balanced Tree
  * definition: left and right sides are nearly the same length
    * now, search and insertion methods cut the tree in half each round, resulting in
    * 0(log(N))
* Balancing a Tree
  * **Rotating**: the process of moving the nodes around on a tree until we find balance
  * but there are cons
    * depending on size of unbalanced tree, the # of rotations required to fix it might be expensive to process
    * also, you first have to start by checking if tree is balanced, which can be an expensive operation in itself
* The Self-Balancing Tree
  * AVL Tree (named after inventors Adelson-Velsky and Landis)
  * how does it work?
    * calculates the difference in heights between left and right sides
      * if diff is 0 or 1: tree is balanced
      * if diff > 1: tree is unbalanced
    * usually, the height of a given node is stored as a property within the node itself (like how it stores L and R props)
      * height of a node: longest possible path forward in the tree before reaching a leaf node
        * use setHeight method to do this for u
        * height DOES NOT INCLUDE ROOT NODE!!
  * When you add a new node to an AVL tree, it can either keep it balanced or throw it off balances
    * 4 scenarios for imbalance:
      * Left-left imbalance
        * the fix: rotate everything to the right
      * Left-right imbalance
        * the fix:
          * 1. swap outer 2 nodes
          * 2. then rotate everything to the right
      * Right-right imbalance
        * the fix: rotate everything to the left
      * Right-left imbalance
        * the fix:
          * 1. swap outer 2 nodes
          * 2. then rotate everything to the right
    * So everytime a node is added, the AVL tree
      * checks for balance
      * if unbalanced, perform one of the fixes,
      * thus, tree is always balanced!

### Graphs

* What is a graph?
  * a collection of nodes, which store data, and edges, which represent relationships or connections between nodes
  * widely used in modern SWE
  * IRL examples
    * booking flight online
    * following someone on IG (or any social media)
    * Google Maps
      * nodes are locations, edges are roads/routes (connections between those locations)
  * very powerful and flexible data structure
    * but very complicated
* Graphs vs. Trees
  * both have nodes and edges
    * but the edges in a graph are a lot more FLEXIBLE
  * Trees are hierchical in nature, but graphs represent relationships in general
* Edges in a Graph are either...
  * Undirected: a mutual connection between nodes
  * Directed: pointing from one node to another
* Graph Types
  * Undirected Graph
    * all edges are undirected
    * do not point from one node to another
      * ex. like a "friend" graph on FB, all friend relationships are mutual
  * Directed Graph
    * all edges are directed
      * ex. liking someones post on fb
* Representing Graphs
  * 2 ways:
    * Adjacency list
      * uses a collection of arrays for each node
    * Ajdacency matrix
      * represented by a 2 dimensional array
  * difference is big O efficiency

    | Operation   | Adj List | Adj Matrix |
    |-------------|----------|------------|
    | Lookup      | 0(N)     | 0(1)       |
    | Add node    | 0(1)     | 0(N^2)     |
    | Remove node | 0(N+E)   | 0(N^2)     |
    | Add edge    | 0(1)     | 0(1)       |
    | Remove edge | 0(E)     | 0(1)       |
    | Memory      | 0(N+E)   | 0(N^2)     |

* The Adjacency List Representation
  * more commonly used
  * graph is rep by a collection of arrays for each node
  * ex.
        let graph = {
          'A': ['B', 'E'],
          'B': ['A', 'C', 'D', 'E'],
          'C': ['B', 'D'],
          'D': ['B', 'C', 'E'],
          'E': ['A', 'B', 'D'],
        }
  * each key-value pair = a node
    * key = value of node
    * value = array of edges to other nodes
  * This example is an undirected graph (goes both ways)
* The Adjacency Matrix Representation
  * graph is rep by a 2D array (an array of arrays)
  * ex.
       let graph = [
        [0, 1, 0, 0, 1 ],
        [1, 0, 1, 1, 1 ],
        [0, 1, 0, 1, 0 ],
        [0, 1, 1, 0, 1 ],
        [1, 1, 0, 1, 0 ],
      ]
  * each subarray = node
    * values in node/subarray = edges to other nodes
    * 1 = edge, 0 = lack of an edge
  * This example is also an undirected graph (goes both ways)
    * secret clue: all adj matrices for undirected graphs have a diagonal line running down the middle (L to R) - either all 0s or all 1s
    * also, across this diag, the two sides are perfectly symmetrical since each connection goes both ways
* Making a Graph
  * graphs can look wildly diff depending on their purpose, but here are methods for building a graph common across most implementations:
    * .addNode(N): add a node, N, to the graph
    * .addEdge(src, dest): add an edge between the nodes src and dest (destination)
* Traversing a Graph
  * just like binary trees, there are the same 2 methods for traversing graphs:
    * breadth-first search
    * depth-first search
  * Same rules apply as w/ binary trees
    * closer to start of graph: breadth first
    * v wide graph thts not v deep: depth-first
    