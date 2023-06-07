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
  
    // function to get the last node
    getLast(){
        // traverse list
        let node = this.head

        while (node) {
            node = node.next
        }

        return node
    }
    
  
    appendNode(data){
        // creates a new node with the given data and adds it to back of the list
        const newNode = new Node(data)
        // get last node
        const lastNode = this.getLast()
        console.log("last node:", lastNode)
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
    }
    pop(){
        // removes the last node from the list and returns it
    }
    removeFromFront(){
        // remove the head node from the list and return it
        // the next node in the list is the new head node
    }
    insertAt(X, data){
        // insert a new node into the list with the given data
        // place it after X nodes in the list
        // if X exceeds the bounds of the list, put the node at the end
        // insertAt(0, 7) would add the new node as the head
    }
    removeAt(X){
        // remove the Xth node from the list, considering 0 to be the first node
        // return the node that has been removed
    }
    search(data){
        // searches the list for a node with the given data
        // if it is found, return the "index" of the node, considering 0 to be the first node
        // if not, return false
    }
    sort(){
        // sort the Linked List in ascending order of data values
    }
}

let list = new LinkedList();
list.appendNode(1);