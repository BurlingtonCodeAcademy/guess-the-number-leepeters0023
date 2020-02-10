/*const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
} 

let minGuess = 0
let maxGuess = 100
let computerGuess = randNumGen(minGuess, maxGuess)
let memoryArr = [minGuess, maxGuess]// to store previous guesses  
let middleIndex = Math.floor((memoryArr[0] + memoryArr.length-1) / 2);

start()
async function start() {
  console.log("Let's play a game where you (human) make up a number and I (computer) try to guess it.")
  let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n"); 
  console.log('You entered: ' + secretNumber);
  let userAnswerYN = await ask('Is your secret number ' +computerGuess+'?') // assign user input yes or no to variable
      userAnswerYN = inputConverter(userAnswerYN) // standardize input
  while (userAnswerYN !== "y") {
      //computerGuess = randNumGen(minGuess, maxGuess) // --> might be redundant? 
      let userAnswerHL = await ask('Is it higher or lower?') // assign user input higher or lower to variable
          userAnswerHL = inputConverter(userAnswerHL) // standardize input
        if (userAnswerHL === "h") {
          memoryArr.push(computerGuess)
          memoryArr.sort(function (a,b) {return a - b})
          console.log(memoryArr) // test array push and sort
          maxGuess = memoryArr[memoryArr.indexOf(computerGuess)]
          minGuess = middleIndex
          computerGuess = randNumGen(minGuess, maxGuess)
        } 
        if (userAnswerHL === "l") {
          memoryArr.push(computerGuess)
          memoryArr.sort(function (a,b) {return a - b})
          console.log(memoryArr) // test array push and sort
          maxGuess = middleIndex
          minGuess = memoryArr[memoryArr.indexOf(computerGuess)]
          computerGuess = randNumGen(minGuess, maxGuess)
        } 
      userAnswerYN = await ask('Is your secret number ' +computerGuess+'?\n') // reassigns input to userAnswerYN for use in while loop
  } if (userAnswerYN === "y") {
    console.log('I win! And I guessed in X number of tries.')
  }
process.exit()
}

function randNumGen(min, max) {
  let randNum =  Math.floor(Math.random() * (min, max + 1)) + 1
  return randNum;
}

function inputConverter(string) {
  string = string.toString().trim().toLowerCase();
  let convertedInput = string[0];
  return convertedInput;
}

  // computer outputs random number 
  // sanitize input in a similar fashion as hello.js so everything is standardized - .tolowercase trim() etc etc
  // from there, if not h or l, log message prompting "please enter h or l"
  // set variable that keeps track of what the high and low range is 
  // cheat detector should break the program if there's contradictory lows and high */
