function findFirstDuplicate(arr) {
  array = [];




  for (i = 0; i < arr.length; i++) {
    current = arr[i];

    if (array.includes(current)) {
      console.log(array)
      return current;
    }
    array.push(current);
  }

  return -1;

}

console.log(findFirstDuplicate([2, 1, 3, 3, 2]));

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
