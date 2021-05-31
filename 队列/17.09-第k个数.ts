function getKthMagicNumber(k: number): number {
  const arr = [1]
  let p3 = 0, p5 = 0, p7 = 0, min = 0
  while (arr.length < k) {
    min = Math.min(arr[p3] * 3, arr[p5] * 5, arr[p7] * 7)
    arr.push(min)
    if (arr[p3] * 3 === min) p3++
    if (arr[p5] * 5 === min) p5++
    if (arr[p7] * 7 === min) p7++
  }
  return arr[k - 1]
}
