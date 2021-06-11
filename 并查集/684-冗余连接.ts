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
}

function findRedundantConnection(edges: number[][]): number[] {
  const edgesSet = new UnionSet(edges.length)
  let res: number[] = []
  edges.forEach(([a, b]) => {
    if (edgesSet.find(a) === edgesSet.find(b)) res = [a, b]
    else edgesSet.merge(a, b)
  })
  return res
}
