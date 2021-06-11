export {}

//* 1.通过并查集
class UnionSet {
  private readonly boss: number[]
  private readonly size: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
    this.size = new Array(n).fill(0).map(_ => 1)
  }
  
  find(index: number): number {
    return this.boss[index] = this.boss[index] === index ? index : this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    const bossA = this.find(a), bossB = this.find(b)
    if (bossA === bossB) return
    this.boss[bossA] = bossB
    this.size[bossB] += this.size[bossA]
  }
  
  max() {
    let res = 0
    this.size.forEach(s => res = s > res ? s : res)
    return res
  }
}

function longestConsecutive(nums: number[]): number {
  //* 得到一个无重复的序列
  const counter = new Map()
  nums.forEach((num, index) => {
    if (!counter.has(num)) counter.set(num, index)
  })
  const unionSet = new UnionSet(nums.length)
  counter.forEach((index, num) => {
    if (counter.get(num + 1) !== undefined) unionSet.merge(index, counter.get(num + 1))
  })
  return unionSet.max()
}

//* 2.通过set集合
// function longestConsecutive(nums: number[]): number {
//   const counterSet = new Set()
//   nums.forEach(num => counterSet.add(num))
//
//   let longest = 0, current = 1
//   for (let num of counterSet) {
//     if (counterSet.has((num as number) - 1)) continue
//     while (counterSet.has((num as number) + 1)) {
//       (num as number) += 1
//       current++
//     }
//     longest = Math.max(current, longest)
//     current = 1
//   }
//
//   return longest
// }
