// implement a list node
class ListNode {
    constructor(data){
        this.data = data
        this.next = null
    }
}

// implement a linked list
class LinkedList {
    constructor(head = null) { // if head is not passed, it is initialized to null
        this.head = head
    }

    // HELPER METHODS

    // returns # of nodes present
    size(){
        let count = 0
        let node = this.head
        while(node){ // while head exists, aka while list is size of 1 or greater
            count += 1
            node = node.next // node is reassigned to next node (if null, then while loop will exit after this)
        }
        return count
    }

    // empties the list
    // accomplishes this by setting head to null and cutting off the pointer, thereby cutting off reference to the rest of the nodes (if any)
    clear(){
        this.head = null
    }
}

// create nodes
let node1 = new ListNode(2) // create node with a data value of 2
let node2 = new ListNode(5) // create node with a data value of 5
node1.next = node2 // LINK node1 to node2

// create a linked list with node1 as head
let list = new LinkedList(node1)

console.log(list.head.next.data) // should return the data of 2nd node => 5

console.log(list.size()) // => 2

console.log(list) // => LinkedList { head: ListNode { data: 2, next: ListNode { data: 5, next: null } } }
list.clear()
console.log(list) // LinkedList { head: null }