// write a function called arrayIntersection that takes two arrays and return an array
// containing intersection of two input arrays i.e common element appear in both arrays
// arrayIntersection([1, 2, 3, 4, 5], [4, 5, 7, 8, 9]) // [4, 5]

// function arrayIntersection(arr1, arr2) {
//   const intersection = [];
//   const set1 = new Set(arr1);
//   for (let num of arr2) {
//     if (set1.has(num)) {
//       intersection.push(num);
//     }
//   }
//   return intersection;
// }

function arrayIntersection(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      result.push(arr2[i]);
    }
  }
  return result;
}

console.log(arrayIntersection([1, 9, 10, 2, 3, 1, 4, 5], [5, 7, 1, 8, 9])); // [5, 1, 9]
