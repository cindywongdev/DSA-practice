// code from 2 sources: 
// https://medium.com/hackernoon/programming-with-js-insertion-sort-1316df8354f5
// https://www.doabledanny.com/insertion-sort-in-javascript

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i+=1){
        let currentValue = arr[i] // store current item value so we can use it later

        let j // declare j so we can use it in this larger scope later

        // now loop through arr in sorted array (starting from current, iterate backwards to beginning)
        // if item in sorted array is GREATER than current value, copy it one index to the right (move greater items to make a spot for current item in sorted array)
        // on the first iteration of larger loop, when sorted array is only 1 element, this loop below will be skipped bc it's not necessary
        for (j = i - 1; j > -1 && arr[j] > currentValue; j-=1){
            arr[j + 1] = arr[j]
        }

        // once we break out of the loop (when item in sorted array is LESS than current value, OR we've reached the head of the array (when j < -1)), assign current value to the correct index
        arr[j + 1] = currentValue
    }

    return arr
}

const list = [6, 1, 2, 3, 4, 5]
const list2 = [54, 26, 93, 17, 77, 31, 44, 55, 20]
console.log(insertionSort(list))
console.log(insertionSort(list2))