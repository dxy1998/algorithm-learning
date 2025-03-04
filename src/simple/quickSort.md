# 快速排序

## 1、递归实现

```javascript
function quickSort(nums) {
  if (nums.length <= 1) return nums
  let leftArr = [],
    rightArr = [],
    pivot = nums.pop()
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i]
    if (current < pivot) {
      leftArr.push(current)
    } else {
      rightArr.push(current)
    }
  }
  let lSorted = quickSort(leftArr)
  let rSorted = quickSort(rightArr)
  return [...lSorted, pivot, ...rSorted]
}
console.log(quickSort([3, 6, 1, 9, 7, 2, 5, 8, 4]))
```

## 2、In Place实现

```javascript
function quickSort(nums, left = 0, right = nums.length - 1) {
  if (left < right) {
    let pivotIndex = partition(nums, left, right)
    quickSort(nums, left, pivotIndex - 1)
    quickSort(nums, pivotIndex + 1, right)
  }
  function partition(arr, l, r) {
    let pivot = arr[r],
      j = l
    for (let i = l; i < r; i++) {
      if (arr[i] < pivot) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        j++
      }
    }
    ;[arr[j], arr[r]] = [arr[r], arr[j]]
    return j
  }
}
let arr = [3, 6, 1, 9, 7, 2, 5, 8, 4]
quickSort(arr)
console.log(arr)
```
