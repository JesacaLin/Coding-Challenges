// Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. Update the variable result to "Found Droids!" if the array contains the string "Droids". Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result.

//Using includes() method
// function droids(arr) {
//   result = "";
//   if (arr.includes("Droids") === true) {
//     return "Found Droids!";
//   } else {
//     return "These are not the droids you're looking for.";
//   }

//using for loop:
function droids(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Droids") {
      result = "Found Droids";
    } else {
      result = "These are not the droids you're looking for";
    }
  }
  return result;
}

const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
console.log(droids(starWars)); // should log: "Found Droids!"
console.log(droids(thrones)); //
