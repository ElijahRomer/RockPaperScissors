console.log('If this is logged, then app.js is linked correctly');

document.querySelector('#start').addEventListener('click', startGame);

function startGame(){
  console.log(`startGame Fired`)
  let possibleChoices = ['R', 'P', 'S'];
  let playerChoice = prompt('Please type R (for rock), P (for paper), or S (for scissors).')
   if (possibleChoices.includes(playerChoice)){
    alert(`Player chooses ${playerChoice}`)
  } else {
    alert(`Your choice "${playerChoice}" is invalid. Please enter only a single character R, P, or S.`)
  }

  let computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];

  alert(`Computer chooses ${computerChoice}.`)

  console.log(computerChoice);
  let wins = 0;
  let losses = 0;
  let status;

  if (playerChoice === computerChoice){
    alert(`It's a tie!`)
    status = 'tied'
  } else if (playerChoice === 'R'){
      if (computerChoice === 'S'){
        alert(`ROCK SMASHES SCISSORS! You win.`);
        wins++;
        status ='won';
      } else if (computerChoice === 'P'){
        alert(`PAPER COVERS ROCK! You lose.`)
        losses++;
        status ='lost';
      }
  } else if (playerChoice === 'P'){
      if (computerChoice === 'S'){
        alert(`SCISSORS CUTS PAPER! You lose.`);
        losses++;
        status ='lost';
      } else if (computerChoice === 'R'){
        alert(`PAPER COVERS ROCK! You win.`)
        wins++;
        status ='won';
      }
  } else if (playerChoice === 'S'){
    if (computerChoice === 'P'){
      alert(`SCISSORS CUTS PAPER! You win.`);
      wins++;
      status ='won';
    } else if (computerChoice === 'R'){
      alert(`ROCK SMASHES SCISSORS! You lose.`)
      losses++;
      status ='lost';
    }
  }
  alert(`The game is over. You ${status}. Wins: ${wins}; Losses: ${losses}.`)
  }


