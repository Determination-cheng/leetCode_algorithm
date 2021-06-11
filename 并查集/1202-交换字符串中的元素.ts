export {}

class SmallHeap {
  public readonly data: [string, number][]  // [字母, 下标]
  constructor(data?: [string, number][]) {
    this.data = data || []
    this.init()
  }
  
  init() {
    for (let i = 1; i < this.data.length; i++) this.sortUp(i)
  }
  
  peek() {
    return this.data[0]
  }
  
  pop() {
    if (!this.data.length) return null
    if (this.data.length === 1) return this.data.pop()
    const res = this.data[0]
    this.data[0] = this.data.pop() as [string, number]
    this.sortDown(0)
    return res
  }
  
  sortUp(index: number) {
    let parentIndex: number
    while (index) {
      parentIndex = (index - 1) >> 1
      if (this.data[index][0] < this.data[parentIndex][0]) this.swap(index, parentIndex)
      else return
      index = parentIndex
    }
  }
  
  sortDown(index: number) {
    let leftIndex: number, rightIndex: number, target: number
    while (index < this.data.length) {
      target = index
      leftIndex = (index << 1) + 1
      rightIndex = (index << 1) + 2
      if (leftIndex < this.data.length && this.data[leftIndex][0] < this.data[target][0]) target = leftIndex
      if (rightIndex < this.data.length && this.data[rightIndex][0] < this.data[target][0]) target = rightIndex
      if (index === target) return
      this.swap(index, target)
      index = target
    }
  }
  
  swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

class UnionSet {
  public readonly data: number[]
  constructor(n: number) {
    this.data = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number): number {
    return this.data[index] = this.data[index] === index ? index : this.find(this.data[index])
  }
  
  merge(a: number, b: number) {
    this.data[this.find(a)] = this.find(b)
  }
}

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const res = new Array(s.length)
  const unionSet = new UnionSet(s.length)
  const setMap: {[key: number]: [string, number][]} = {}  // [字母, 下标]
  let queue: SmallHeap
  
  pairs.forEach(([x, y]) => unionSet.merge(x, y))
  const dataSet = [...unionSet.data]  // 获得每个集合的成员分布
  
  // 按集合分类进行遍历
  dataSet.forEach((data, index) => {
    if (!setMap[unionSet.find(data)]) setMap[unionSet.find(data)] = []
    setMap[unionSet.find(data)].push([s[index], index])
  })
  
  let data: string[] = []
  let indexes: number[] = []
  let temp = 0
  for (let set in setMap) {
    // 对每个集合的字母进行排序
    queue = new SmallHeap(setMap[set])
    // 将排序好的字母复制到对应的位置上
    while (queue.data.length) {
      data.push(queue.peek()[0])
      indexes.push(queue.peek()[1])
      queue.pop()
    }
    indexes.sort((i, j) => i - j)
    while (indexes.length) {
      temp = indexes.pop() as number
      res[temp] = data.pop()
    }
  }
  return res.join('')
}
