function sortedSquares(arr) {
  let i = 0,
    j = arr.length - 1
  const newArr = []

  while (i <= j) {
    if (arr[j] ** 2 > arr[i] ** 2) {
      newArr.unshift(arr[j--] ** 2)
    } else {
      newArr.unshift(arr[i++] ** 2)
    }
  }
  return newArr
}

console.log(sortedSquares([-7, -3, 2, 3, 11]))
