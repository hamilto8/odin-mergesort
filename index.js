function mergeHelper(leftArr, rightArr) {
  let newArr = [];
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      newArr.push(leftArr.shift());
    } else {
      newArr.push(rightArr.shift());
    }
  }
  newArr = newArr.concat(leftArr.length ? leftArr : rightArr);

  return newArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);

  const subleft = mergeSort(arr.slice(0, midpoint));
  const subright = mergeSort(arr.slice(midpoint));

  return mergeHelper(subleft, subright);
}

console.log(mergeSort([3, 2, 5, 6, 1, 9]));
