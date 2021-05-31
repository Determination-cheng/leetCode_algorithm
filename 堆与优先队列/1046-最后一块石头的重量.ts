//* 1.每次先给石头排序，然后再处理
// function lastStoneWeight(stones: number[]): number {
//   let x: number, y: number, diff: number
//   while (stones.length > 1) {
//     stones = stones.sort((i, j) => j - i)
//     x = stones.shift()
//     y = stones.shift()
//     diff = x - y
//     if (!diff) continue
//     stones.push(Math.abs(x - y))
//   }
//   return stones.length ? stones[0] : 0
// }

//* 2.用大顶堆
class BigHeap {
  public data: number[]
  constructor(data: number[]) {
    this.data = data
    this.init()
  }
  
  init() {
    for (let i = 1; i < this.data.length; i++) this.softUp(i)
  }
  
  size() {
    return this.data.length
  }
  
  push(val: number) {
    this.data.push(val)
    this.softUp(this.data.length - 1)
  }
  
  pop() {
    if (!this.data.length) return null
    if (this.data.length === 1) return this.data.pop()
    const res = this.data[0]
    this.data[0] = this.data.pop()
    this.softDown(0)
    return res
  }
  
  softUp(index: number) {
    let parentIndex: number
    while (index) {
      parentIndex = (index - 1) >> 1
      if (this.data[parentIndex] < this.data[index]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else break
    }
  }
  
  softDown(index: number) {
    let leftIndex: number, rightIndex: number, target: number
    while (index < this.data.length) {
      leftIndex = (index << 1) + 1
      rightIndex = (index << 1) + 2
      target = index
      if (leftIndex < this.data.length && this.data[leftIndex] > this.data[target]) {
        target = leftIndex
      }
      if (rightIndex < this.data.length && this.data[rightIndex] > this.data[target]) {
        target = rightIndex
      }
      if (index === target) break
      this.swap(index, target)
      index = target
    }
  }
  
  swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

function lastStoneWeight(stones: number[]): number {
  const stoneHeap = new BigHeap(stones)
  let x: number, y: number, diff: number
  while (stoneHeap.size() > 1) {
    x = stoneHeap.pop()
    y = stoneHeap.pop()
    diff = Math.abs(x - y)
    if (diff === 0) continue
    stoneHeap.push(diff)
  }
  return !stoneHeap.size() ? 0 : stoneHeap.pop()
}
