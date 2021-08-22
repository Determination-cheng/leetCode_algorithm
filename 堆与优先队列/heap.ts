class Heap {
  public heap: number[]
  private readonly kind: boolean
  constructor(arr: number[], kind: 'big' | 'small') {
    this.kind = kind === 'big'
    this.heap = arr

    this.init()
  }

  private init() {
    for (let i = 1; i < this.heap.length; i++) this.sortUp(i)
  }

  size() {
    return this.heap.length
  }

  peek() {
    return this.size() ? this.heap[0] : null
  }

  push(n: number) {
    this.heap.push(n)
    this.sortUp(this.heap.length - 1)
  }

  pop() {
    if (!this.heap.length) return null
    if (this.heap.length === 1) return this.heap.pop()
    const res = this.heap[0]
    this.heap[0] = this.heap.pop() as number
    this.sortDown(0)
    return res
  }

  private sortUp(index: number) {
    let parentIndex: number
    while (index > 0) {
      parentIndex = (index - 1) >> 1
      if (this.kind) {
        // 大顶堆
        if (this.heap[parentIndex] < this.heap[index]) this.swap(index, parentIndex)
        else break
      } else {
        // 小顶堆
        if (this.heap[parentIndex] > this.heap[index]) this.swap(index, parentIndex)
        else break
      }
      index = parentIndex
    }
  }

  private sortDown(index: number) {
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

export {}
