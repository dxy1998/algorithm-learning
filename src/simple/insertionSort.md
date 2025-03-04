# 插入排序

```javascript
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i],
      j = i - 1
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j]
      j--
    }
    nums[j + 1] = temp
  }
  return nums
}
console.log(insertionSort([3, 6, 1, 9, 7, 2, 5, 8, 4]))
```
