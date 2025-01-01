// Write a function called isValidIPv4 that takes a string as input and returns true if the input is valid IPv4 address
// Validate IP addreses of version 4. An IPv4 address should consists of four octets with values 0 and 255 inclusive.
// isValidIPv4('1.2.3.4') // true
// isValidIPv4('123.45.67.89') // true
// isValidIPv4('1.2.3') // false

const isValidIPv4 = (input) => {
  const octets = input.split(".");
  if (octets.length !== 4) {
    return false;
  }
  return octets.every((octet) => {
    const num = parseInt(octet);
    return num >= 0 && num <= 255;
  });
};

console.log(isValidIPv4("300.45.67.89")); // false
