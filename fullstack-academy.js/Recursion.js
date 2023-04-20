// Count To Ten
// Write a function, countToTen, that receives a number less than or equal to 10. countToTen should console.log every number between the given number and 10, including 10. Use recursion.

// NOTE: The test for this function checks how many times you call console.log. If you use console.log for debugging purposes, that's great! But your test will likely fail, so comment out your unnecessary console.logs when you want to see if you're passing the test!

// const countToTen = (num) =>{
//     //base case - num is 10
//     if (num === 10){
//         console.log(10);
//     } else{
//         //recursive case - easiest case to try first
//         console.log(num);
//         return countToTen(num + 1) //2
//     }
// };

// console.log(countToTen(1));

// Backward String
// Write a function, backwardString, that receives a string as an argument. It should log every letter in the string, from the last character to the first. Use recursion.

// NOTE: As with the last problem, the tests will check how many times console.log is called.

function backwardString(string) {
  //base case? string.length is 1, console.log(last letter)
  if (string.length === 1) {
    console.log(string[0]);
  } else {
    //recursive case - log the current letter and call the function with the new string
    const currentLetter = string[string.length - 1];
    console.log(currentLetter);
    const newString = string.substring(0, string.length - 1);
    return backwardString(newString);
  }
}

backwardString("happy");
// y
// p
// p
// a
// h
