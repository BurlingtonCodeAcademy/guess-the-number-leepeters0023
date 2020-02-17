//Write the reverse game, where the computer thinks of a number and the human guesses it. 
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
} 

// | - - - starter code - do not change above - - - |

let guessLog = [] // keep track of guess count and previous guesses
let min = 0 // initialize min
let max = 10 // initialize max
let computerNum = randNumGen(min, max) // initialize random number

// | - - - initialize game  - - - |

start()

async function start() {
  console.log("Let's play a game where I (computer) pick a number between 1 and 10 and you (human) try to guess it.")

  let userNum = parseInt(await ask("Ready? Enter your first guess to begin\n"))

// | - - - guard clauses  - - - |

  if (typeof(userNum) === NaN) { // check input type 
    console.log("Please start over and enter a whole number between 1 and 10")
    process.exit();
  } 
    
  else if (userNum < min || userNum > max) { // check input range
    console.log("Please start over and enter a whole number between 1 and 10")
    process.exit();
  }

    guessLog.push(userNum) // track previous guesses 
  
  if (userNum == computerNum) { // using loose comparison in case of unexpected type coersion
    console.log("Congrats, that's it!")
    process.exit()
  }

  while (userNum !== computerNum) {
    let userNum = parseInt(await ask("Sorry, try again\n"))

    if (userNum === NaN) { // check for Nan 
      console.log("Please start over and enter a whole number between 1 and 10")
      process.exit();
     } 
      
    else if (userNum < min || userNum > max) { // check input range
        console.log("Please start over and enter a whole number between 1 and 10")
        process.exit();
    }

    else if (userNum === computerNum) {
      console.log("Congrats, that's it! It took this many tries: " + guessLog.length)
      process.exit()
    }

    // track, sort, and test previous guesses 
    guessLog.push(userNum)
    guessLog.sort() 
    guessTest(userNum)
      }
    } 

// | - - - process functions - do not change below  - - - |

// func to return random integer (inclusive on both ends)
function randNumGen(min, max) { 
  let randNum =  Math.floor(Math.random() * (max - min + 1)) + min + 1
  return randNum;
}

// func to test if a number has already been guessed 
function guessTest (num) {
      if (guessLog.includes(num) === true) {
      console.log("You already guessed " + num + ", try again")
      }
}
