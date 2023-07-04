// queue uses a doubly linked list
class Node {
    constructor(data, next = null, prev = null){
        this.data = data
        this.next = next
        this.prev = prev
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null // keep track of last item in queue
    }

    enqueue(data){
        const newNode = new Node(data, null, this.head)
        // next pointer for new node will always be null because it will be added to the end of the queue, so it is the tail
        // prev pointer for new node is initially set to this.head in case it is the first in queue, if not, it will be reassigned later
            // wait then.. why cant it just be null? just like next pointer? bc if it's the first element, what's the use in having a prev pointer back to itself?
        
        // if new node is added to empty queue
        if (!this.head){
            // make this new node the head
            // next = null, prev = itself
            this.head = newNode
        // else, if the queue isn't empty, take care of the pointers first
        } else {
            this.tail.next = newNode // current last element in queue should point to new element
            newNode.prev = this.tail // reassign prev pointer (which currently points to this.head) to the current last element
        }
        
        // in either case, make the tail the new node as last step
        this.tail = newNode
    }

    // same steps as stack, since we're removing from beginning aka top
    dequeue(){
        // save data to var before severing
        const data = this.head.data
        this.head = this.head.next
        return data
    }

    // rest is same as stack too
    // *** code is same, but this.head represents diff things in stack vs. queue
        // in stack, head is TOP of stack, aka LAST item added
        // in queue, head is BEGINNING of queue, aka FIRST item added
    peek(){
        return this.head.data
    }

    isEmpty(){
        return this.head == null
    }
}