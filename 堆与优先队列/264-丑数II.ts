function nthUglyNumber(n: number): number {
  let p2 = 0, p3 = 0, p5 = 0, min = 0
  const res = [1]
  while (res.length < n) {
    min = Math.min(res[p2] * 2, res[p3] * 3, res[p5] * 5)
    res.push(min)
    if (res[p2] * 2 === min) p2++
    if (res[p3] * 3 === min) p3++
    if (res[p5] * 5 === min) p5++
  }
  return res.pop()
}
