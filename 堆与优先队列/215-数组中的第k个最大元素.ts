//* 1.排序数组
// function findKthLargest(nums: number[], k: number): number {
//   return nums.sort((i, j) => j - i)[k - 1]
// }

//* 堆
class Heap {
  public data: number[]
  private readonly kind: boolean
  constructor(data: number[], kind: 'big' | 'small') {
    // 为了能用小顶堆解题而使用了深拷贝
    this.data = [...data]
    this.kind = kind === 'big'
    this.init()
  }
  
  private init() {
    for (let i = 1; i < this.data.length; i++) this.sortUp(i)
  }
  
  peek() {
    return this.data.length ? this.data[0] : null
  }
  
  size() {
    return this.data.length
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
        if (this.data[parentIndex] > this.data[index]) this.swap(index, parentIndex)
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

//* 2.大顶堆
// function findKthLargest(nums: number[], k: number): number {
//   const numsHeap = new Heap(nums, "big")
//   for (let i = 0; i < k - 1; i++) {
//     numsHeap.pop()
//   }
//   return numsHeap.peek()
// }

//* 3.小顶堆
function findKthLargest(nums: number[], k: number): number {
  const numsHeap = new Heap(nums, "small")
  for (let i = 0; i < nums.length - k; i++) {
    numsHeap.pop()
  }
  return numsHeap.peek()
}
