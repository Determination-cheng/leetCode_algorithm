export {}

class UnionSet {
  private readonly boss: number[]
  private setCount: number
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
    this.boss[this.find(a)] = this.find(b)
    this.setCount--
  }
  
  count() {
    return this.setCount  // 不需要变换座位对数
  }
}

function minSwapsCouples(row: number[]): number {
  const couples = row.length >> 1 // 总对数
  const unionSet = new UnionSet(couples)
  for (let i = 0; i < row.length; i += 2) {
    unionSet.merge(row[i] >> 1, row[i + 1] >> 1)
  }
  return couples - unionSet.count() // 总对数 - 不需要变换座位的对数
}
