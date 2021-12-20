// 二分法
function search(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    const mid = left + ((right - left) >> 1)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid
    } else {
      return mid
    }
  }
  return -1
}

const nums = [-1, 0, 3, 5, 9, 12],
  target = 2
console.log(111, search(nums, target))
