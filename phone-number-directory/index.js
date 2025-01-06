// You are building a phone directory application. Implement a function called phoneNumberDirectory that takes an array of
// phone numbers as input and return a Map with names as keys and coressponding phone number as values.
// Output: Map {'John' => '123-456-7890', 'Jane' => '986-533-4213'}

const phoneNumbers = [
  "John:123-456-7890",
  "Jane:986-345-8347",
  "Joe:345-573-5747",
];

// The input array elements should be formatted as NAME:PHONENUMBER

const phoneDirectory = () => {
  const phoneDir = new Map();
  const directory = phoneNumbers.map((item) => item.split(":"));
  for (let [key, value] of directory) {
    phoneDir.set(key, value);
  }
  return phoneDir;
};

console.log(phoneDirectory());
