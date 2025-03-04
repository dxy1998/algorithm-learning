# 二分查找

```javascript
function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left <= right) {
    let mid = (left + right) >> 1
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5))
```
