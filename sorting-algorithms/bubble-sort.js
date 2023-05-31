function bubbleSort(array) {
    let swapHappened = true

    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn
    while (swapHappened){
      // reset swapHappened to false each time so we can detect if a swap
      // happened in this specific iteration.
      swapHappened = false
      
      // Make another loop (inside the first one) to go through one 
      // round of swapping from the start of the list to the end
      for (let i=0; i<array.length-1; i+=1){
        const current = array[i]
        const next = array[i+1]
        
        // Inside inner loop:
        // compare each pair of elements near each other
        // swap them if the bigger one was at a lower index.
        if (current > next) {
          array[i] = next
          array[i+1] = current
          // Make sure to keep track of whether a swap happened!
          swapHappened = true
        }
      }
    }
  
    // After both loops have exited, remember to return the array
    return array;
}

console.log(bubbleSort([ 12, 6, 3, 7, 13, 8 ]))