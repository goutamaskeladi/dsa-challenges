const nameSet = new Set([1, 2, 3, "John"]);

// add value to the set
nameSet.add("Mike");

// check value in the set
console.log(nameSet.has(2));

// delete value in the set
nameSet.delete(3);

// get all values
console.log(nameSet.values());

// clear set
nameSet.clear();

console.log(nameSet);
