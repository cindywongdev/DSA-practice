// make node object
class Node {
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

// make stack object
class Stack {
    constructor(){
        this.head = null
    }

    push(data){
        // assigns head to newly pushed node, each time
        // and the new node's link is always to the the prev head (the Node() constructor runs first, so that call of this.head points to the prev head, before it then gets reassigned)
        // so the head is always the top of the stack, with links pointing down the stack
        // if the stack is empty, the first node's link points to itself
        this.head = new Node(data, this.head)
    }

    pop(){
        // save head node's data into a var before we sever it from the list (cuz then it'll disappear into the void)
        const data = this.head.data
        // now sever it from the list by reassigning head to the next node (the node below the head in the stack)
        this.head = this.head.next
        // now return the popped data
        return data
    }

    peek(){
        // this.head.data contains the entire linked list stack
        return this.head.data
    }

    isEmpty(){
        // return true if head doesn't exist
        return this.head == null
    }
}