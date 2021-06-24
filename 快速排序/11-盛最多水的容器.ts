function maxArea(height: number[]): number {
  let i = 0, j = height.length - 1, ans = 0
  while (i < j) {
    ans = Math.max(ans, (j - i) * Math.min(height[i], height[j]))
    if (height[i] < height[j]) i++
    else j--
  }
  return ans
}
