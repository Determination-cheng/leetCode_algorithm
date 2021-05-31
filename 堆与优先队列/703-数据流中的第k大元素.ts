//* 1.数组排序
// class KthLargest {
//   private nums: number[]
//   private readonly k: number
//   constructor(k: number, nums: number[]) {
//     this.nums = nums
//     this.k = k
//   }
//
//   add(val: number): number {
//     this.nums.push(val)
//     this.nums = this.nums.sort((i, j) => j - i)
//     return this.nums[this.k - 1]
//   }
// }

//* 2.大顶堆 (简单测试用例能过，但是超时)
class BigHeap {
  public data: number[]
  constructor(data: number[]) {
    this.data = data
    this.init()
  }
  
  init() {
    for (let i = 1; i < this.data.length; i++) this.sortUp(i)
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
      if (this.data[index] > this.data[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else break
    }
  }
  
  private sortDown(index: number) {
    let leftIndex: number, rightIndex: number, target: number
    while (index < this.data.length) {
      target = index
      leftIndex = (index << 1) + 1
      rightIndex = (index << 1) + 2
      if (leftIndex < this.data.length && this.data[leftIndex] > this.data[target]) target = leftIndex
      if (rightIndex < this.data.length && this.data[rightIndex] > this.data[target]) target = rightIndex
      if (target === index) break
      this.swap(index, target)
      index = target
    }
  }
  
  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

class KthLargest {
  private nums: BigHeap
  private readonly k: number
  constructor(k: number, nums: number[]) {
    this.nums = new BigHeap(nums)
    this.k = k
  }
  
  add(val: number): number {
    const temp: number[] = []
    this.nums.push(val)
    for (let i = 0; i < this.k - 1; i++) {
      temp.push(this.nums.pop())
    }
    const res = this.nums.peek()
    const data = this.nums.data
    this.nums = new BigHeap([...temp, ...data])
    return res
  }
}
