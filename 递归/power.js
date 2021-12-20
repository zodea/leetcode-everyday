/**
 * 计算x的y次方，时间复杂度O(n)
 * @param {number} x 底
 * @param {number} y 次方数
 * @returns x**y
 */
function power1(x, y) {
  let base = 1
  for (let i = 0; i < y; i++) {
    base *= x
  }
  return base
}
console.time()
console.log(power1(2, 200))
console.timeEnd()
/**
 * 递归计算x的y次方，时间复杂度O(n)
 * 通过计算处理了多少次，得出是n次
 * @param {number} x 底
 * @param {number} y 次方数
 * @returns x**y
 */
function power2(x, y) {
  if (y === 0) return 1
  return power2(x, y - 1) * x
}

console.time()
console.log(power2(2, 200))
console.timeEnd()

/**
 * 递归计算x的y次方，时间复杂度O(n)
 * 每次可以看作一个完美二叉树，因此执行了2^(m + 1) - 1 次，m的深度是logn - 1，因此执行了n-1次，时间复杂度为O(n)
 * @param {number} x 底
 * @param {number} y 次方数
 * @returns x**y
 */
function power3(x, y) {
  if (y === 0) return 1
  if (y % 2 === 1) {
    return power3(x, ~~(y / 2)) * power3(x, ~~(y / 2)) * x
  }
  return power3(x, ~~(y / 2)) * power3(x, ~~(y / 2))
}

console.time()
console.log(power3(2, 200))
console.timeEnd()

/**
 * 递归计算x的y次方，时间复杂度O(logn)
 * 此处去掉了冗余的计算，由于每次调用只执行了一次递归，且递归函数为n/2，次数就变成了logn
 * @param {number} x 底
 * @param {number} y 次方数
 * @returns x**y
 */
function power4(x, y) {
  if (y === 0) return 1
  const f = power4(x, ~~(y / 2))
  if (y % 2 === 1) {
    return f * f * x
  }
  return f * f
}
console.time()
console.log(power4(2, 200))
console.timeEnd()
