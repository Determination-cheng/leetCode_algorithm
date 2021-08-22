function mergeSort(nums: number[], l: number, r: number) {
  if (l >= r) return nums
  const mid = (l + r) >> 1
  mergeSort(nums, l, mid)
  mergeSort(nums, mid + 1, r)
  const temp: number[] = []
  let p1 = l, p2 = mid + 1
  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && nums[p1] < nums[p2])) {
      temp.push(nums[p1++])
    } else {
      temp.push(nums[p2++])
    }
  }
  for (let i = l; i <= r; i++) nums[i] = temp[i - l]
}
