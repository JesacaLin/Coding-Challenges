// Examine the code given to you. Try to make the calls variable equal to 'JerryKramerGeorgeElaine' with only a single invocation to the function jerry.

let calls = "";

function jerry(str) {
  str += "Jerry";
  return kramer(str);
}

function george(str) {
  str += "George";
  return elaine(str);
}

function elaine(str) {
  str += "Elaine";
  return str;
}

function kramer(str) {
  str += "Kramer";
  return george(str);
}

// Uncomment these to check your work!
calls = jerry(calls);
console.log(calls); // should log: 'JerryKramerGeorgeElaine'
