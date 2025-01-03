function sumUpTo(n) {
  if (n === 1) {
    return 1;
  }
  return n + sumUpTo(n - 1);
}

console.log(sumUpTo(10)); // 55
