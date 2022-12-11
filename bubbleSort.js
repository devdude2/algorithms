function bubbleSort(arr) {
  // get the number of elements in the array
  let n = arr.length;

  // loop through the array, sorting adjacent pairs of elements
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // get the current pair of elements
      let first = arr[j];
      let second = arr[j + 1];

      // if the current pair is out of order, swap them
      if (first > second) {
        arr[j] = second;
        arr[j + 1] = first;
      }
    }
  }

  // return the sorted array
  return arr;
}

// Start with an array of n elements.
// Loop through the array, comparing each pair of adjacent elements.
// If the current pair is out of order (i.e., the first element is greater than the second element), swap them.
// Repeat this process for the next pair of adjacent elements, and continue until you reach the end of the array.
// At this point, the largest element will be at the end of the array.
// Repeat the process starting at the beginning of the array, but only loop through the first n-1 elements (since the last element is now in the correct position).
// Continue repeating this process until the array is sorted.