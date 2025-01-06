// Extend the existing HashTable class with a new method called getValues(). This method should return an array containing
// all the values stored in the hash table, irrespective of the keys.
// Add the getValues() method to the HashTable.

const HashTable = require("../custom-hash-table");

const hashData = new HashTable();

hashData.set("James", "BMW");
hashData.set("Mike", "Mercedes");
hashData.set("Sara", "Audi");
hashData.set("Peter", "Porsche");

console.log(HashTable.hello());

console.log(hashData.getValues());

/*
Hello Hash Table undefined
[ 'BMW', 'Porsche', 'Mercedes', 'Audi' ]
*/
