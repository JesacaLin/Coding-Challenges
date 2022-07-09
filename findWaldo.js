// Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

//find the value associated with the key "Waldo"
//set up if/then statement
//return "Where's Waldo" if the key Waldo is not found.

function findWaldo(obj) {
  if (!obj.Waldo) {
    return `Where's Waldo?`;
  } else {
    return obj.Waldo;
  }
}

const DC = { Bruce: "Wayne", Harley: "Quinn" };
const supernatural = {
  Sam: "Winchester",
  Dean: "Winchester",
  Waldo: "unknown",
};
console.log(findWaldo(DC)); // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)); // should log: 'unknown'
