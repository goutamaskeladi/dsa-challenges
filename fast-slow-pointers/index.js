const LinkedList = require("../linked-list-implementation");

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log(list.findMiddle()); // 3
