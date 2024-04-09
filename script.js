const options = ["piedra", "papel", "tijera"];



function getComputerChoice() {
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}



function playerChoice() {
  let validatedInput = false;
  while (validatedInput == false) {
    const choice = prompt("Piedra, Papel o Tijera?");
    if (choice == null) {
      continue;
    }
    const choiceInLower = choice.toLowerCase();
    if (options.includes(choiceInLower)) {
      validatedInput = true;
      return choiceInLower;
    }
  }
}



function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Es un empate!";
  } else if (playerSelection === "piedra" && computerSelection === "tijera") {
    return "Ganaste! Piedra gana a tijera.";
  } else if (playerSelection === "piedra" && computerSelection === "papel") {
    return "Perdiste! Papel gana a piedra.";
  } else if (playerSelection === "papel" && computerSelection === "piedra") {
    return "Ganaste! Papel gana a piedra.";
  } else if (playerSelection === "papel" && computerSelection === "tijera") {
    return "Perdiste! Tijera gana a papel.";
  } else if (playerSelection === "tijera" && computerSelection === "piedra") {
    return "Perdiste! Piedra gana a tijera.";
  } else if (playerSelection === "tijera" && computerSelection === "papel") {
    return "Ganaste! Tijera gana a papel.";
  }
}



function playGame() {
  let scorePlayer = 0;
  let scoreComputer = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();

    console.log(playerSelection, "vs", computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log(`Jugador ${scorePlayer} VS Computadora ${scoreComputer}`);

    if (
    playRound(playerSelection, computerSelection) === "Ganaste! Piedra gana a tijera." || 
    playRound(playerSelection, computerSelection) === "Ganaste! Papel gana a piedra." || 
    playRound(playerSelection, computerSelection) === "Ganaste! Tijera gana a papel."
  ) {
      scorePlayer++;

    } else if (
    playRound(playerSelection, computerSelection) === "Perdiste! Piedra gana a tijera." || 
    playRound(playerSelection, computerSelection) === "Perdiste! Papel gana a piedra." || 
    playRound(playerSelection, computerSelection) === "Perdiste! Tijera gana a papel."
  ) {
      scoreComputer++;
    }
  }

  console.log("Fin del juego");
  if (scorePlayer > scoreComputer) {
    console.log("¡Felicidades, ganaste!");
  } else if (scorePlayer < scoreComputer) {
    console.log("Lo siento, perdiste.");
  } else {
    console.log("Es un empate!");
  }
}



playGame();