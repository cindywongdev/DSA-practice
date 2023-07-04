class Stack {
    constructor(){
        // initialize array
        this.items = []
    }

    // for push & pop, use built in array methods in JS
    push(item){
        this.items.push(item)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        // returns last item in array, aka the top of the stack
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        // just check length of array
        return this.items.length === 0
    }
}