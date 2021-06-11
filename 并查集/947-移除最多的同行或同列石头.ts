export {}

class UnionSet {
  private readonly boss: number[]
  public setCount: number
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
    this.setCount = n
  }
  
  find(index: number): number {
    return this.boss[index] = this.boss[index] === index ? index : this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    const bossA = this.find(a), bossB = this.find(b)
    if (bossA === bossB) return
    this.boss[bossA] = bossB
    this.setCount--
  }
}

function removeStones(stones: number[][]): number {
  const stoneSet = new UnionSet(stones.length)
  stones.forEach(([x1, y1], i) => {
    for (let j = i + 1; j < stones.length; j++) {
      if (x1 === stones[j][0] || y1 === stones[j][1]) stoneSet.merge(i, j)
    }
  })
  return stones.length - stoneSet.setCount
}
