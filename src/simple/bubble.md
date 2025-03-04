# 冒泡排序

```javascript
function bubbleSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let flag = false
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        ;[nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        flag = true
      }
    }
    if (!flag) return nums
  }
  return nums
}
console.log(bubbleSort([3, 6, 1, 9, 7, 2, 5, 8, 4]))
```
