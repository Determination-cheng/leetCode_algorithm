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
    const bossA = this.find(a), bossB = this.find(b)
    if (bossA === bossB) return
    this.boss[bossA] = bossB
  }
}

function findRedundantDirectedConnection(edges: number[][]): number[] {
  let res: number[] = []
  const nodeCount = edges.length
  // 数组从0开始，这里申请n+1的长度是为了方便计算
  const parent = new Array(nodeCount + 1).fill(0).map((v, i) => i)
  const unionSet = new UnionSet(nodeCount + 1)
  
  let twoParentsEdgeIndex = -1, cycleEdgeIndex = -1
  edges.forEach(([parentNode, targetNode], index) => {
    if (targetNode !== parent[targetNode]) {
      // 两个父节点
      twoParentsEdgeIndex = index
    } else if (unionSet.find(targetNode) === unionSet.find(parentNode)){
      // 闭环
      cycleEdgeIndex = index
    } else {
      // 目标节点既不会有两个父节点，也不会形成闭环
      parent[targetNode] = parentNode
      unionSet.merge(targetNode, parentNode)
    }
  })
  
  // 找有问题的边
  if (twoParentsEdgeIndex === -1) {
    // 没有双重父节点，直接返回环路
    return edges[cycleEdgeIndex]
  } else {
    // 记录有双重父节点的边
    const conflictEdge = edges[twoParentsEdgeIndex]
    if (cycleEdgeIndex >= 0) {
      // 有环路和双重父节点
      return [parent[conflictEdge[1]], conflictEdge[1]]
    }
    // 只有双重父节点，没有环路
    return conflictEdge
  }
}
