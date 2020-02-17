const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
} 
// | - - - starter code - do not change above - - - |

let minGuess = 0
let maxGuess = 100
let guessCount = [] // array to track user guesses 
let pluralOrnot = "try"

// | - - - initialize game  - - - |

start() 
async function start() {
  console.log("Let's play a game where you (human) make up a number between 0 and 100 and I (computer) try to guess it.")
  
  let secretNumber = parseInt(await ask("What is your secret number?\nI won't peek, I promise...\n")); 
    console.log('You entered: ' + secretNumber);

  let computerGuess = randNumGen(minGuess, maxGuess) // assign random integer within range to variable

  let userAnswerYN = await ask('Is your secret number ' +computerGuess+'?') // assign user input 
      userAnswerYN = inputConverter(userAnswerYN) // standardize input to trimmed lower case string

  guessCount.push(computerGuess) // tracking player guesses in array

    if (userAnswerYN === "y") {
        console.log('I win! And I guessed in ' + guessCount.length + pluralOrnot)
        } 

  while (userAnswerYN !== "y") {
    let userAnswerHL = await ask('Is it higher or lower?') // assign user input 
        userAnswerHL = inputConverter(userAnswerHL) // standardize input to trimmed lower case string

      // guard clause checking against accidental input
      if (secretNumber < computerGuess && userAnswerHL === "h") {
        console.log("incorrect input, please start again") 
        process.exit() 
      }
      if (secretNumber > computerGuess && userAnswerHL === "l") {
        console.log("incorrect input, please start again") 
        process.exit() 
      }

    if (userAnswerHL === "l") {
      maxGuess = computerGuess
      computerGuess = Math.floor((minGuess + maxGuess) / 2) // re-assign computer guess based on narrowed range
      guessCount.push(computerGuess) 
    } 
    if (userAnswerHL === "h") {
      minGuess = computerGuess 
      computerGuess = Math.floor((minGuess + maxGuess) / 2)
      guessCount.push(computerGuess)
    }

    userAnswerYN = await ask('Is your secret number ' +computerGuess+'?') 
    userAnswerYN = inputConverter(userAnswerYN)

    if (userAnswerYN === "y") {
       pluralOrnot = " tries"
       console.log('I win! And I guessed in ' + guessCount.length + pluralOrnot)
    }
  }
  process.exit()
}

// | - - - process functions - do not change below  - - - |

// func to return random integer (inclusive on both ends)
function randNumGen(min, max) { 
  let randNum =  Math.floor(Math.random() * (max - min + 1)) + min 
  return randNum;
}
// func to standardize input to return a trimmed lower case string
function inputConverter(string) { 
  string = string.toString().trim().toLowerCase();
  let convertedInput = string[0];
  return convertedInput;
}
