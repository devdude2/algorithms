function quickSort(arr) {
  // base case: if the array has 0 or 1 elements, it is already sorted
  if (arr.length <= 1) return arr;

  // choose a pivot element (in this case, the first element)
  let pivot = arr[0];

  // create two arrays to hold the elements less than and greater than the pivot
  let left = [];
  let right = [];

  // loop through the rest of the array, adding each element to the appropriate array
  for (let i = 1; i < arr.length; i++) {
    let elem = arr[i];  // get the current element
    if (elem < pivot) {
      // add element to the left array
      left.push(elem);
    } else {
      // add element to the right array
      right.push(elem);
    }
  }

  // sort the left and right arrays using quickSort
  left = quickSort(left);
  right = quickSort(right);

  // concatenate the left array, the pivot element, and the right array
  // to get the final sorted array
  return left.concat(pivot, right);
}
