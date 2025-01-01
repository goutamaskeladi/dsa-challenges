// Write a function called diceGameSimulation that simulates this dice game. The function should take one argument.
// numSimulations: The number of times to simulate the dice game.
// The game rules are if a 7 or 11 are rolled, the player wins and they get a result of win. If a 2, 3 or 12 are rolled
// they lose and get result of lose. Anything else and they get result of rollagain.

// 7, 11 - Win and 2, 3, 12 - Lose and any other roll again.
// diceSimulation(3)
/*
 { dice1: 1, dice2: 5, sum: 6, result: 'roll again'}
*/

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceResult(sum) {
  switch (sum) {
    case 7:
    case 11:
      return "Won";
    case 2:
    case 3:
    case 12:
      return "Lose";
    default:
      return "Roll again";
  }
}

function diceGameSimulation(numSimulations) {
  const result = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const sum = dice1 + dice2;
    result.push({
      dice1: dice1,
      dice2: dice2,
      sum: sum,
      result: diceResult(sum),
    });
  }
  return result;
}

console.log(diceGameSimulation(3));
