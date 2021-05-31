function nthSuperUglyNumber(n: number, primes: number[]): number {
  const indexes: {[key: number]: number} = {}
  let temp: number[] = []
  const res: number[] = [1]
  let min = 0
  
  primes.forEach(num => indexes[num] = 0)
  
  while (res.length < n) {
    for (const num in indexes) temp.push(res[indexes[num]] * Number(num))
    min = Math.min(...temp)
    temp = []
    res.push(min)
    for (const num in indexes) {
      if (res[indexes[num]] * Number(num) === min) indexes[num]++
    }
  }
  
  return res[n - 1]
}
