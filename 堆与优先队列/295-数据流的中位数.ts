class Heap {
  public data: number[]
  private readonly kind: boolean
  constructor(data: number[], kind: 'big' | 'small') {
    this.data = [...data]
    this.kind = kind === 'big'
    this.init()
  }
  
  private init () {
    for (let i = 1; i < this.data.length; i++) this.sortUp(i)
  }
  
  size() {
    return this.data.length
  }
  
  peek() {
    return this.data.length ? this.data[0] : null
  }
  
  push(val: number) {
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
      if (this.kind) {
        // 大顶堆
        if (this.data[index] > this.data[parentIndex]) this.swap(index, parentIndex)
        else break
      } else {
        // 小顶堆
        if (this.data[index] < this.data[parentIndex]) this.swap(index, parentIndex)
        else break
      }
      index = parentIndex
    }
  }
  
  private sortDown(index: number) {
    let leftIndex: number, rightIndex: number, target: number
    while (index < this.data.length) {
      leftIndex = (index << 1) + 1
      rightIndex = (index << 1) + 2
      target = index
      
      if (this.kind) {
        // 大顶堆
        if (leftIndex < this.data.length && this.data[leftIndex] > this.data[target]) target = leftIndex
        if (rightIndex < this.data.length && this.data[rightIndex] > this.data[target]) target = rightIndex
      } else {
        // 小顶堆
        if (leftIndex < this.data.length && this.data[leftIndex] < this.data[target]) target = leftIndex
        if (rightIndex < this.data.length && this.data[rightIndex] < this.data[target]) target = rightIndex
      }
      
      if (target === index) break
      this.swap(target, index)
      index = target
    }
  }
  
  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

class MedianFinder {
  public front: Heap
  public last: Heap
  constructor() {
    this.front = new Heap([], 'big')
    this.last = new Heap([], 'small')
  }
  
  addNum(num: number): void {
    //* 1.推入添加数字
    if (!this.front.size() || num <= this.front.peek()) this.front.push(num)
    else this.last.push(num)
    //* 2.平衡左右堆
    if (this.front.size() > this.last.size() + 1) this.last.push(this.front.pop())
    if (this.last.size() > this.front.size()) this.front.push(this.last.pop())
  }
  
  findMedian(): number {
    const even = ((this.front.size() + this.last.size()) % 2) === 0
    if (even) {
      return (this.front.peek() + this.last.peek()) / 2
    }
    return this.front.peek()
  }
}
