function minSubArrayLen(target, nums) {
  const len = nums.length
  let result = len + 1,
    i = 0,
    subLength = 0,
    sum = 0
  for (let j = 0; j < len; j++) {
    sum += nums[j]

    while (sum >= target) {
      subLength = j - i + 1
      if (subLength === 1) return 1
      if (subLength > result) {
        sum -= nums[i++]
      } else {
        result = subLength
        sum -= nums[i++]
      }
    }
  }
  return result > len ? 0 : result
}

console.log(minSubArrayLen(7, [2, 3, 1]))
