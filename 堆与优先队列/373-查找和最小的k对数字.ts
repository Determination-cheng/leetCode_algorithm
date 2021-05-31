class SmallHeap {
  public data: [[number, number], number][]
  constructor(data: [[number, number], number][]) {
    this.data = data
  }
  
  private init() {
    for (let i = 1; i < this.data.length; i++) this.sortUp(i)
  }
  
  size() {
    return this.data.length
  }
  
  push(val: [[number, number], number]) {
    this.data.push(val)
    this.sortUp(this.data.length - 1)
  }
  
  pop() {
    if (!this.data.length) return null
    if (this.data.length === 1) return this.data.pop()
    const res = this.data[0]
    this.data[0] = this.data.pop()
    this.sortDown(0)
    return res
  }
  
  private sortUp(index: number) {
    let parentIndex: number
    while (index) {
      parentIndex = (index - 1) >> 1
      if (this.data[index][1] < this.data[parentIndex][1]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else break
    }
  }
  
  private sortDown(index: number) {
    let leftIndex: number, rightIndex: number, target: number
    while (index < this.data.length) {
      leftIndex = (index << 1) + 1
      rightIndex = (index << 1) + 2
      target = index
      if (leftIndex < this.data.length && this.data[leftIndex][1] < this.data[target][1]) target = leftIndex
      if (rightIndex < this.data.length && this.data[rightIndex][1] < this.data[target][1]) target = rightIndex
      if (target === index) break
      this.swap(index, target)
      index = target
    }
  }
  
  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
  
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
  const smallHeap = new SmallHeap([])
  nums1.forEach(n1 => nums2.forEach(n2 => smallHeap.push([[n1, n2], n1 + n2])))
  const res: number[][] = []
  while (k--) {
    if (smallHeap.size()) res.push(smallHeap.pop()[0])
  }
  return res
}
