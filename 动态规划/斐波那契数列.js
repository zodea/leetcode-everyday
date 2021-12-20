function fib(num) {
  const arr = []
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      arr[0] = 1
    } else if (i === 1) {
      arr[1] = 1
    } else {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
  }
  return arr[num - 1]
}

console.time()
console.log(fib(150))
console.timeEnd()
