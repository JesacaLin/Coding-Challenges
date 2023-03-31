// let instructorData = {
//   name: "Elie",
//   additionalData: {
//     instructor: true,
//     favoriteHobbies: ["Playing Cello", "Tennis", "Coding"],
//     moreDetails: {
//       favoriteBasketballTeam: "New York Knicks",
//       numberOfSiblings: 3,
//       isYoungest: true,
//       hometown: {
//         city: "West Orange",
//         state: "NJ",
//       },
//       citiesLivedIn: ["Seattle", "Providence", "New York"],
//     },
//   },
// };

// Write a function called displayCities that console.logs all the values in the citiesLivedIn array:

// const displayCities = () => {
//   const citiesArray = instructorData.additionalData.moreDetails.citiesLivedIn;
//   citiesArray.forEach((city) => {
//     console.log(city);
//   });
// };

// displayCities();

// "Seattle"
// "Providence"
// "New York"

// Write a function called displayHometownData that console.logs all the values inside of the hometown object

// const displayHometownData = () => {
//   const hometown = instructorData.additionalData.moreDetails.hometown;
//   for (let key in hometown) {
//     console.log(hometown[key]);
//   }
// };

// displayHometownData();

// "West Orange"
// "NJ"

// Let's write a function called addDetail that accepts two parameters, a key and a value and adds the key and value to the moreDetails object and returns the moreDetails object

// const addDetail = (key, value) =>{
//     const obj = instructorData.additionalData.moreDetails;
//     obj[key] = value;
//     return obj;
// }

// addDetail("isHilarious", true);
// console.log(addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]));
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
}
*/
// addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"]);
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    },
    citiesLivedIn: ["Seattle", "Providence", "New York"],
    isHilarious: true
    previousApartments: ["Mission", "North Beach", "Nob Hill"]
}
*/

// Finally, let's write a function called removeDetail that removes a key in the moreDetails object and returns the moreDetails object (the new keys added above are not included in these examples).

// function removeDetail (toRemove){
//     const obj = instructorData.additionalData.moreDetails;
//     delete obj[toRemove];
//     return obj;
// }

// console.log(removeDetail("citiesLivedIn"));
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true,
    hometown: {
        city: "West Orange",
        state: "NJ",
    }
}
*/
// console.log(removeDetail("hometown"));
/*
{
    favoriteBasketballTeam: "New York Knicks",
    numberOfSiblings: 3,
    isYoungest: true
}
*/
// console.log(removeDetail("favoriteBasketballTeam"));
/*
{
    numberOfSiblings: 3,
    isYoungest: true
}
*/

// Given the following nested object:

let nestedData = {
  innerData: {
    order: ["first", "second", "third"],
    snacks: ["chips", "fruit", "crackers"],
    numberData: {
      primeNumbers: [2, 3, 5, 7, 11],
      fibonnaci: [1, 1, 2, 3, 5, 8, 13],
    },
    addSnack: function (snack) {
      nestedData.innerData.snacks.push(snack);
      return nestedData.innerData.snacks;
    },
  },
};

// Using a for loop, console.log all of the numbers in the primeNumbers array.
const primeLoop = nestedData.innerData.numberData.primeNumbers;
for (let i = 0; i < primeLoop.length; i++) {
  console.log(primeLoop[i]);
}

// Using a for loop, console.log all of the even Fibonnaci numbers.
const fibLoop = nestedData.innerData.numberData.fibonnaci;
const fibFilter = fibLoop.filter((num) => {
  return num % 2 === 0;
});
console.log(fibFilter);

// Console.log the value "second" inside the order array.
console.log(nestedData.innerData.order[1]);

// Invoke the addSnack function and add the snack "chocolate".
nestedData.innerData.addSnack("chocolate");
console.log(nestedData);
