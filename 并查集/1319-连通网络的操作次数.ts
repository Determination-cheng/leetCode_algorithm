export {}

class UnionSet {
  private readonly boss: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number): number {
    return this.boss[index] = this.boss[index] === index ? index : this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    this.boss[this.find(a)] = this.find(b)
  }
  
  count() {
    let res = 0
    this.boss.forEach((v, i) => v === i && res++)
    return res
  }
}

function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) return -1
  const connectionSet = new UnionSet(n)
  connections.forEach(([a, b]) => {
    connectionSet.merge(a, b)
  })
  
  // 数集合的个数，连接数就是集合个数-1
  return connectionSet.count() - 1
}
