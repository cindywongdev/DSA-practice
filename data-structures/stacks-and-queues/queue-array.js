// same as stack except for dequeue and peek
// dequeue: remove FIRST item instead of last
// peek: peek at FIRST item instead of last

class Queue {
    constructor(){
        this.items = []
    }

    enqueue(item){
        this.items.push(item)
    }

    dequeue(){
        // shift() returns item at BEGINNING of array
        return this.items.shift()
    }
    
    peek(){
        // return FIRST item in queue
        return this.items[0]
    }

    isEmpty(){
        return this.items.length === 0
    }
}