const myObj = { test: 1 };
const myFunction = () => {};

const map = new Map([
  ["name", "John"],
  [1, "Number one"],
  [true, "really true"],
  [null, null],
  [myObj, "Some object"],
]);

// Get values
console.log(map.get(null)); // null
console.log(map.get(myObj)); // Some object

// Set values
map.set(myFunction, () => "Hello World");

// Check values
console.log(map.has(1)); // true
console.log(map.has(2)); // false

// Remove values
map.delete(myFunction);

// Get size
console.log(map.size); // 5

// Iterating over a map both key value
for (let item of map) {
  console.log(item);
}

// Gives both key/value separately
for (let [key, value] of map) {
  console.log(key, value);
}

// Get keys/values
console.log(map.keys());
console.log(map.values());

// Clear the values
map.clear();
console.log(map);
