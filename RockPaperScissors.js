const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase(); 
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput; 
  }
  console.log("User Input Error");
}

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  let choice = ''; 

  if(randomNumber === 0){
    choice = 'rock'; 
  } 
  else if(randomNumber === 1){
    choice = 'paper'; 
  }
  else{
    choice = 'scissors'; 
  }

  return choice; 
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'tie'; 
  }

  if(userChoice === 'rock'){
    if(computerChoice === 'scissors'){
      return 'win'; 
    }
    else{
      return 'lose'; 
    }
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'win'; 
    }
    else{
      return 'lose'; 
    }
  }
  else{
    if(computerChoice === 'paper'){
      return 'win'; 
    }
    else{
      return 'lose'; 
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('rock'); 
  let computerChoice = getComputerChoice(); 

  console.log(`player choice is ${userChoice} and computer choice is ${computerChoice}`); 

  console.log(determineWinner(userChoice, computerChoice));
}

playGame(); 






