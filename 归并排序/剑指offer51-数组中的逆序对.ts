function counter(nums: number[], l: number, r: number) {
  if (l >= r) return 0
  const mid = (l + r) >> 1
  let res = 0, p1 = l, p2 = mid + 1
  res += counter(nums, l, mid)
  res += counter(nums, mid + 1, r)
  const temp: number[] = []
  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && nums[p1] > nums[p2])) {
      temp.push(nums[p1++])
      res += r - p2 + 1
    } else {
      temp.push(nums[p2++])
    }
  }
  for (let i = l; i <= r; i++) nums[i] = temp[i - l]
  
  return res
}

function reversePairs(nums: number[]): number {
  return counter(nums, 0, nums.length - 1)
}

export {}
