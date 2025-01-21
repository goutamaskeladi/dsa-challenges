// Merge sort algorithm divides the input array into smaller sub arrays, sort them separately and then merges back
// together in the correct order.

const array = [4, 3, 2, 10, 12, 1, 5, 6];

function mergeSort(arr) {
  // lets add base case, it should be less than = to 1 because it can't be split anymore.
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort(array));
/*
[
    1, 2,  3,  4,
    5, 6, 10, 12
]
*/
