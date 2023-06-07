class Node{
    constructor(data){
        // a Node starts with a given data property
        this.data = data
        // a Node also has a .next property initialized as null
        this.next = null
    }
}

class LinkedList{
    constructor(){
        // a Linked List starts with a "head" property intialized as null
        this.head = null
    }

    // function to get length of list
    getCount(){
        // traverse list
        let node = this.head
        let count = 0
        while (node){
            node = node.next
            count += 1
        }
        return count
    }
  
    // function to get the last node
    getLast(){
        // traverse list
        let node = this.head
        // while node exists AND node.next exists (we first need to know if node exists, otherwise trying to access node.next will throw an error if it doesnt)
        // if it does, if node.next exists (there is a next node to traverse to, reassign node to the next node)
        while (node && node.next) {
            node = node.next
        }
        return node
    }
    
  
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        const newNode = new Node(data)
        // get last node
        const lastNode = this.getLast()

        // if lastNode is null, that means this newNode will be the head
        if (!lastNode){
            this.head = newNode
        } else {
            // append new node to last node
            lastNode.next = newNode
        }
    }
  
    prependNode(data){
        // creates a new node with the given data and adds it to the front of the list
        
        // create new node
        const newNode = new Node(data)

        // if head exists
        if (this.head){
            // grab head
            const head = this.head
            // reference head as new node's link
            newNode.next = head
            // set newNode as head property (necessary!)
            this.head = newNode
        } else {
            // if no head, set newNode as head
            this.head = newNode
        }
    }

    pop(){
        // removes the last node from the list and returns it
        // // first, grab the last node
        // const lastNode = this.getLast()
        // console.log("pop lastNode:", lastNode)

        // check how many nodes are in list
        const numNodes = this.getCount()

        let poppedNode = null

        if (numNodes === 0){
            console.log('nothing to pop')
        } else if (numNodes === 1){
            // if last node is the only node, great
            poppedNode = this.head
            // now remove it
            this.head = null
        } else if (numNodes >= 2){
            // else, grab second to last node
            // traverse list
            let penultimateNode = this.head
            while (penultimateNode.next.next != null){
                penultimateNode = penultimateNode.next
            }
            // set poppedNode to last node
            poppedNode = penultimateNode.next
            // remove last node
            penultimateNode.next = null
        }
        return poppedNode
    }

    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node

        // grab head node
        const removed = this.head

        // set new head to 2nd node (i guess this automatically removed the first head's reference)
        const newHead = this.head.next
        this.head = newHead

        return removed
    }

    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head

        // create new node
        const newNode = new Node(data)
        // initialize var to traverse later to get to insert position
        let placeAfterThisNode = this.head

        // if X <= 0, place new node at beginning
        if (X <= 0){
            const currHead = this.head // save current head into var
            this.head = newNode
            newNode.next = currHead
        // if X exceed bounds of list, place at end
        } else if (X >= this.getCount()){
            this.appendNode(data)
        } else {
            // traverse list to get to X position
            for(let i=1; i<X; i+=1){
                placeAfterThisNode = placeAfterThisNode.next
            }
            // save the ref of placeAfterThisNode before replacing it
            const restOfList = placeAfterThisNode.next
            // replace ref to new Node
            placeAfterThisNode.next = newNode
            // add rest of list back to new node
            newNode.next = restOfList
        }
    }

    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed

        let removedNode = null

        if (X === 0){
            removedNode = this.removeFromFront()
        } else {
            let prevNode = this.head
            // traverse list to get to prev node
            for (let i=0; i<X-1; i+=1){
                prevNode = prevNode.next
            }

            // get nodeToRemove and afterNode using prevNode
            const nodeToRemove = prevNode.next
            const afterNode = nodeToRemove.next

            // connect the previous node to the node after
            prevNode.next = afterNode

            removedNode = nodeToRemove
        }

        return removedNode
    }

    // search(data){
    //     // searches the list for a node with the given data
    //     // if it is found, return the "index" of the node, considering 0 to be the first node
    //     // if not, return false
    // }

    // sort(){
    //     // sort the Linked List in ascending order of data values
    // }
}

// let list = new LinkedList();
// list.appendNode(1);
// list.appendNode(2);
// list.appendNode(3);
// list.appendNode(4);
// // list.prependNode(27)
// // console.log(list.pop()) // 42

// // console.log("count:", list.getCount())
// // console.log("removed from front:", list.removeFromFront())
// // console.log("removed from front:", list.removeFromFront())
// // console.log("removed from front:", list.removeFromFront())

// // list.insertAt(2, 527)
// list.removeAt(0)
// list.removeAt(0)

let list = new LinkedList();
list.appendNode(1);
list.appendNode(2);
list.appendNode(3);
let removedNode = list.removeAt(1);
console.log(list.head.next.data) // => 3
console.log(list.head.data) // => 1
console.log(removedNode.data) // => 2
let secondRemovedNode = list.removeAt(0);
console.log(secondRemovedNode.data) // => 1
console.log(list.head.data) // => 3


console.log("list after all changes:", list)