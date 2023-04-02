// Create a function makePlans that accepts a string. This string should be a name. The function makePlans should call the function callFriend and return the result. callFriend accepts a boolean value and a string. Pass in the friendsAvailable variable and name to callFriend.

// Create a function callFriend that accepts a boolean value and a string. If the boolean value is true, callFriend should return the string 'Plans made with NAME this weekend'. Otherwise it should return 'Everyone is busy this weekend'.

let friendsAvailable = true;

function makePlans(name) {
  // call callFriend and return the result, along with name
  return callFriend(friendsAvailable, name);
}

function callFriend(bool, name) {
  // evaluate boolean value with if/else statement
  if (bool) {
    return `Plans made with ${name} this weekend`;
  } else {
    return "Everyone is busy this weekend";
  }
}

// Uncomment these to check your work!
console.log(makePlans("Mary")); // should return: "Plans made with Mary this weekend'
friendsAvailable = false;
console.log(makePlans("James")); //should return: "Everyone is busy this weekend."
