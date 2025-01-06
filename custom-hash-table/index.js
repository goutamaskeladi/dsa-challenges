class HashTable {
  // limit the amount of key/value pairs - by default it to 14, but while during instatiation you can pass any value
  constructor(limit = 14) {
    this.storage = []; // this is where everything is stored
    this.limit = limit;
  }
  static hello() {
    return `Hello Hash Table ${this.storage}`;
  }
  // this is private it shouldn't be access outside of class
  _hash(key, max) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % max;
  }
  // Log the storage variables - it is public so that can access outside of class
  printTable() {
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i] !== undefined) {
        console.log(`Bucket ${i} having ${this.storage[i]}`);
      } else {
        console.log(`Bucket ${i} is empty`);
      }
    }
  }
  // Add data to hash table
  set(key, value) {
    const index = this._hash(key, this.limit);
    // we are doing collision detection here
    if (this.storage[index] === undefined) {
      this.storage[index] = [[key, value]]; // insert key/value pair
    } else {
      let inserted = false;
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          this.storage[index][i][1] = value;
          inserted = true;
        }
      } // update the value if key exits
      if (inserted === false) {
        this.storage[index].push([key, value]);
      }
    }
  }
  get(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) {
          return this.storage[index][i][1];
        }
      }
    }
  }
  remove(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      delete this.storage[index];
    }
  }
  has(key) {
    const index = this._hash(key, this.limit);
    if (this.storage[index]) {
      return this.storage[index][0][0] === key ? true : false;
    } else {
      return false;
    }
  }
  clear() {
    this.storage = [];
  }
  getValues() {
    const values = [];
    // Now we need to loop through our buckets
    for (let i = 0; i < this.storage.length; i++) {
      if (this.storage[i]) {
        for (const [, value] of this.storage[i]) {
          values.push(value);
        }
      }
    }
    return values;
  }
}

// const myHashTable = new HashTable();

// myHashTable.set("John", "555-355-5335");
// myHashTable.set("Mike", "456-374-5757");
// myHashTable.set("Sara", "456-353-5567");

// console.log(`John's phone number `, myHashTable.get("John"));

// myHashTable.remove("Mike");

// console.log(myHashTable.has("Sara")); // true

// myHashTable.printTable();

// console.log(myHashTable.storage);

// console.log(myHashTable._hash("John", myHashTable.limit)); // 7

module.exports = HashTable;
