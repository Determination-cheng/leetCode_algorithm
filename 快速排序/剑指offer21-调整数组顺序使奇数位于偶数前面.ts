function exchange(nums: number[]): number[] {
  let x = 0, y = nums.length - 1
  while (y > x) {
    do {
      while (x < y && nums[x] % 2 === 1) x++
      while (x < y && nums[y] % 2 === 0) y--
      if (x < y) {
        [nums[x], nums[y]] = [nums[y], nums[x]]
        x++
        y--
      }
    } while (x < y)
  }
  return nums
}
