function maxSubArray(nums: number[]): number {
  const sums = [0]
  nums.forEach((num, i) => sums.push(num + sums[i]))
  let ans = sums[1]
  for (let i = 1, pre = 0; i < sums.length; i++) {
    ans = Math.max(sums[i] - pre, ans)
    pre = Math.min(pre, sums[i])
  }
  return ans
}

export {}
