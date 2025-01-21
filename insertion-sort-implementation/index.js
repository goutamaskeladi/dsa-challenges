// Divide & conquer - The main idea of this algorithm is to divide the array into a "sorted" and an "unsorted" part.
// Initially first part is considered as sorted. Then one by one elements from the "unsorted" part are moved to "sorted" part.
// while keeping "sorted" part sorted.

const array = [4, 3, 2, 10, 12, 1, 5, 6];

function insertionSort(arr) {
  // we can start from second, because first is already considered sorted
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentElement;
  }
  return arr;
}

const result = insertionSort(array);

console.log(result);
