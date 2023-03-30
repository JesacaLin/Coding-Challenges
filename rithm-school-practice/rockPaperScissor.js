// Part 3
// Rock / Paper / Scissor
// using your knowledge so far, build a game of Rock/Paper/Scissor where through the use of the prompt function, a user can enter their choice and based on a random selection - they can either tie/win or lose against a computer.

//establish a prompt to ask for input
//record the input as a variable
//determine computer's choice
//compare!

//get element by id and store the value;
const playerChoice = document.getElementById("choice");
const answer = document.getElementById("answer");

submit.addEventListener("click", game);

function game() {
  const player = Number(playerChoice.value);
  const computer = Math.floor(Math.random() * 3) + 1;
  if (player === computer) {
    answer.textContent = "it's a tie!";
  } else if (
    (player === 1 && computer === 3) ||
    (player === 2 && computer === 1) ||
    (player === 3 && computer === 2)
  ) {
    answer.textContent = "You Win!";
  } else {
    answer.textContent = "Computer Wins!";
  }
}

const reset = () => {
  answer.textContent = "";
  playerChoice.value = "";
};

playerChoice.addEventListener("click", reset);
