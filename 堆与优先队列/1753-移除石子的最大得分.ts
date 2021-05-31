function maximumScore(a: number, b: number, c: number): number {
  let ans = 0
  const sorted = [a, b, c].sort((a, b) => a - b)
  const min = Math.min(sorted[0], sorted[2] - sorted[1])
  ans += min
  sorted[0] -= min
  
  if (sorted[0] > 0) {
    if (sorted[0] % 2 === 1) sorted[0]--
    ans += sorted[0]
    sorted[1] -= sorted[0] / 2
  }
  
  return ans + sorted[1]
}
