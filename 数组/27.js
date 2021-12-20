// 双指针法
function removeElement(nums, val) {
  let slowIndex = 0
  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    if (nums[fastIndex] !== val) {
      nums[slowIndex++] = nums[fastIndex]
    }
  }
  nums.length = slowIndex
  console.log(nums)
  return slowIndex
}

removeElement([3, 2, 2, 3], 3)
