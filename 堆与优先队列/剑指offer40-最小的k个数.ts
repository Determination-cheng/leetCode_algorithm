//* 1.直接使用js提供的API
// function getLeastNumbers(arr: number[], k: number): number[] {
//   return arr.sort((i, j) => i - j).slice(0, k)
// }

class Heap {
  public heap: number[]
  private readonly kind: boolean
  constructor(arr: number[], kind: 'big' | 'small') {
    this.kind = kind === 'big'
    this.heap = arr
    
    this.init()
  }
  
  private init() {
    for (let i = 1; i < this.heap.length; i++) this.softUp(i)
  }
  
  size() {
    return this.heap.length
  }
  
  peek() {
    return this.size() ? this.heap[0] : null
  }
  
  push(n: number) {
    this.heap.push(n)
    this.softUp(this.heap.length - 1)
  }
  
  pop() {
    const res = this.heap.length ? this.heap[0] : null
    this.heap[0] = this.heap.pop()
    this.softDown(0)
    return res
  }
  
  private softUp(index: number) {
    let parentIndex: number
    while (index > 0) {
      parentIndex = (index - 1) >> 1
      if (this.kind) {
        // 大顶堆
        if (this.heap[parentIndex] < this.heap[index]) this.swap(index, parentIndex)
      } else {
        // 小顶堆
        if (this.heap[parentIndex] > this.heap[index]) this.swap(index, parentIndex)
      }
      index = parentIndex
    }
  }
  
  private softDown(index: number) {
    let leftIndex: number, rightIndex: number, target = index
    while (index < this.heap.length - 1) {
      leftIndex = (index << 1) + 1
      rightIndex = (index << 1) + 2
      if (this.kind) {
        // 大顶堆
        if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[target]) target = leftIndex
        if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[target]) target = rightIndex
      } else {
        // 小顶堆
        if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[target]) target = leftIndex
        if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[target]) target = rightIndex
      }
      if (target === index) break
      this.swap(target, index)
      index = target
    }
  }
  
  private swap(i: number, j: number) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}
function getLeastNumbers(arr: number[], k: number): number[] {
  const smallHeap = new Heap(arr, 'small')
  const res: number[] = []
  for (let i = 0; i < k; i++) {
    res.push(smallHeap.pop())
  }
  return res
}
