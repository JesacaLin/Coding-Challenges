LOOK; //CHALLENGE: setTimeout

function setCode() {
  console.log("I am at the beginning of the code");
  setTimeout(() => {
    console.log(`I am in the setTimeout callback function.`);
  }, 600);
  console.log("I am at the end of the code");
}

setCode();

LOOK; //CHALLENGE: forEach
function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i);
  }
}

const delays = [200, 500, 0, 350];

function delayLog(delayTime, i) {
  setTimeout(() => {
    console.log(`printing element ${i}`);
  }, delayTime);
}

forEach(delays, delayLog);
