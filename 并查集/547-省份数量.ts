export {}

class UnionSet {
  private readonly boss: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number): number {
    if (this.boss[index] === index) return index
    const root = this.find(this.boss[index])
    this.boss[index] = root
    return root
  }
  
  merge(a: number, b: number) {
    this.boss[this.find(a)] = this.find(b)
  }
  
  count() {
    let res = 0
    this.boss.forEach((v, i) => (v === i) && res++)
    return res
  }
}

function findCircleNum(isConnected: number[][]): number {
  const len = isConnected[0]?.length
  if (!len) return 0
  const unionSet = new UnionSet(len)
  for (let i = 0; i < isConnected.length; i++) {
    for (let j = i + 1; j < len; j++) {
      if (isConnected[i][j] === 1) unionSet.merge(i, j)
    }
  }
  return unionSet.count()
}
