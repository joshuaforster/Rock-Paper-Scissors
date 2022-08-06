let num1 = (Math.random());
let playerSelection = 'rock'
let computerChoice = computerSelection();

gameplay()
function computerSelection() {
if (num1 <= 0.333) {return 'rock'}
else if (num1 > 0.333 && num1 <= 0.666) {return 'paper'}
else {return 'scissors'}

}

function gameplay(){
  if(computerChoice ==='rock' && playerSelection == 'rock')
  {console.log('You both chose rock, it is a draw')}
  else if (computerChoice ==='paper' && playerSelection =='rock')
  {console.log('You lose, paper wraps rock')}
  else if (computerChoice ==='scissors' && playerSelection =='rock')
  {console.log('You win, rock breaks scissors')}
  else if (computerChoice ==='rock' && playerSelection =='paper')
  {console.log('You win, paper wraps rock')}
  else if (computerChoice ==='rock' && playerSelection =='scissors')
  {console.log('You lose, rock breaks scissors')}
   else if (computerChoice ==='paper' && playerSelection =='scissors')
  {console.log('You win, scissors cuts paper')}
  else if (computerChoice ==='paper' && playerSelection =='paper')
  {console.log('It is a draw. You both choose paper.')}
  else if (computerChoice ==='scissors' && playerSelection =='paper')
  {console.log('You lose, scissors cuts paper')}
  else 
  {console.log('It is a draw. You both choose scissors.')}
}
