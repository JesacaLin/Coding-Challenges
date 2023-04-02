// Create a function addWaldo that accepts an object with keys being first names and values being last names. For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.

//create a function that can create an object.
//keys will be first names
//values will be last names
//last value should add key "Waldo" with value "unknown"
//return a mutated object

//create two objects and merge them together to create new obj.

const waldo = { Waldo: "unknown" };

function addWaldo(obj) {
  const result = Object.assign({}, siliconValley, waldo);
  return result;
}

const siliconValley = {
  Richard: "Hendricks",
  Erlich: "Bachman",
  Bertram: "Gilfoyle",
};

console.log(addWaldo(siliconValley)); // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

//Waldo not found. Are you sure you modified the original object?: expected undefined to equal 'unknown'

// const siliconValley = {
//   Richard: "Hendricks",
//   Erlich: "Bachman",
//   Bertram: "Gilfoyle",
// };

// function addWaldo(obj) {
//   obj.Waldo = "unknown";
//   return obj;
// }

// console.log(addWaldo(siliconValley)); // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }
