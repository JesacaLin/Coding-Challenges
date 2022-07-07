/*Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.

Note: Due to the output being based off of a random factor, the tests provided below cannot determine if you have solved the prompt exactly. The test cases for this challenge check for the correct data types only.*/

//declare a function closestToTheMark with two parameters, player1 and player2.
//evaluate which player is cloest to a Math.random number.

function closestToTheMark(p1, p2) {
  const randomNum = Math.floor(Math.random() * 100);
  console.log(`If theMark is ${randomNum}...`);

  if (Math.abs(randomNum - p1) < Math.abs(randomNum - p2)) {
    return "Player 1 is closest";
  } else if (Math.abs(randomNum - p1) > Math.abs(randomNum - p2)) {
    return "Player 2 is closest";
  } else {
    return "Players are tied";
  }
}

console.log(closestToTheMark(25, 75));
