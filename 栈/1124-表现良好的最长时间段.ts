function longestWPI(hours: number[]): number {
  let max = 0
  const preSum = [0], indexStack = [0]
  // 前缀数组准备
  hours.forEach((h, i) => h > 8 ? preSum.push(preSum[i] + 1) : preSum.push(preSum[i] - 1))
  // 找到小的前缀和
  preSum.forEach((s, i) => (s < preSum[indexStack[indexStack.length - 1]]) && indexStack.push(i))
  // 倒叙遍历前缀和数组
  for (let i = preSum.length - 1; i > max; i--) {
    while (indexStack.length && preSum[i] - preSum[indexStack[indexStack.length - 1]] > 0) {
      max = Math.max(max, i - indexStack.pop())
    }
  }
  return max
}
