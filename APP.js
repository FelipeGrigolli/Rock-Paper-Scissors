
let userScore = 0;
let computerScore = 0;


document.addEventListener("DOMContentLoaded", function() {

  const userScore_span = document.getElementById("user-score");
  const computerScore_span = document.getElementById("computer-score");
  const result_p = document.querySelector(".result > p");
  const rock_div = document.getElementById("r");
  const paper_div = document.getElementById("p");
  const scissors_div = document.getElementById("s");


  function game(userChoice) {
    const computerChoice = getComputerChoices();
    switch (userChoice + computerChoice) {
      case "rs":
      case "pr":
      case "sp":
        win(userChoice, computerChoice);
        break;
      case "rp":
      case "ps":
      case "sr":
        lose(userChoice, computerChoice);
        break;
      case "rr":
      case "pp":
      case "ss":
        draw(userChoice, computerChoice);
        break;
    }
  }


  function getComputerChoices() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }


  function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
  }


  function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
  }

  function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost...`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
  }


  function draw(userChoice, computerChoice) {
    result_p.textContent = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a Draw.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
  }

  function main() {

    if (rock_div && paper_div && scissors_div) {

      rock_div.addEventListener('click', () => game("r"));
      paper_div.addEventListener('click', () => game("p"));
      scissors_div.addEventListener('click', () => game("s"));
    }
  }

  main();
});
