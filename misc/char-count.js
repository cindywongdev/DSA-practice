/*------------------------------------------
								CHALLENGE
--------------------------------------------

1) Code a function named charCount that
	 accepts a string as its only argument and
	 returns an object with the count of each
	 character in the string.
2) The returned object should have properties
	 where the keys are a character in the
	 string and the value is how many times the
	 character appears in the string argument.
3) Upper and lower case characters should be
	 counted separately.
4) Space characters should be counted too.

	 For example:

		charCount("Hello there")

		would return an object like this -->
			{ H: 1, e: 3, l: 2, o: 1, ' ': 1, t: 1, h: 1, r: 1 }

------------------------------------------*/

// Write the function here....

function charCount(string){

    // initialize an empty object
      let answer = {}
    // iterate through the string
      for (let i=0; i<string.length; i++){
         // check if character exists as key in object
        if (answer[string[i]]){
            // if exists, increment the value at that key
          answer[string[i]] += 1
        } else {
           // if it doesnt, add character as new object key with a value of 1
          answer[string[i]] = 1
        }
      }
    // return the object
      return answer
    }
    
    /*------------------------------------------
    
    Running the repl should result in the 
    following output:
    
    { L: 1, e: 1, t: 1, "'": 1, s: 1, G: 1, o: 7, "!": 2 }
    
    ------------------------------------------*/
    
    console.log(charCount("Let's Gooooooo!!"))