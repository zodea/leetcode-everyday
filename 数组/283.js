let num = [0, 1, 0, 3, 12]

function moveZeroes(arr) {
  let slowIndex = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[slowIndex++] = arr[i]
    }
  }
  for (let i = slowIndex; i < arr.length; i++) {
    arr[i] = 0
  }
}
