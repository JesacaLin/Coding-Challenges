// Last Friday Night
// According to the song, Katy Perry "maxed our credit cards".
// Define a function, lastFridayNight, takes an array of transactions.
// lastFridayNight should return the total amount she spent last Friday night.

let transactions = [
  {
    name: "Tons of glitter",
    amount: 70,
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92,
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350,
  },
];
//iterate through the array of objects
//set counter
//add key with amount to counter
//return counter
function lastFridayNight(transactions) {
  let counter = 0;
  for (let i = 0; i < transactions.length; i++) {
    counter += transactions[i].amount;
  }
  return counter;
}

console.log(lastFridayNight(transactions)); // => 10512
