let choices = ["Rock", "Paper", "Scissors"];

function play(playerChoice) {
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];
  if (playerChoice == computerChoice) {
    document.querySelector("#Results").innerHTML = `
  <h3>${"Tie"}</h3>`;
  } else if (
    (playerChoice == "Scissors" && computerChoice == "Rock") ||
    (playerChoice == "Rock" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Scissors")
  ) {
    document.querySelector("#Results").innerHTML = `
  <h3>${"You Lose"}</h3>`;
  } else if (
    (playerChoice == "Paper" && computerChoice == "Rock") ||
    (playerChoice == "Rock" && computerChoice == "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper")
  ) {
    document.querySelector("#Results").innerHTML = `
  <h3>${"You Win"}</h3>`;
  }
}
