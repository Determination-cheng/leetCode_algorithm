type dataType = [val: number, pos: number]
class Priority {
  private readonly data: dataType[]
  constructor() {
    this.data = []
  }
  
  size() {
    return this.data.length
  }
  
  push(val: dataType) {
    this.data.push(val)
    this.sortUp(this.data.length - 1)
  }
  
  pop() {
    if (!this.data.length) return null
    if (this.data.length === 1) return this.data.pop()
    const ret = this.data[0]
    this.data[0] = this.data.pop() as dataType
    this.sortDown(0)
    return ret
  }
  
  sortUp(i: number) {
    let parentIndex: number
    while (i) {
      parentIndex = (i - 1) >> 1
      if (this.data[i][0] < this.data[parentIndex][0]) this.swap(i, parentIndex)
      else return
      i = parentIndex
    }
  }
  
  sortDown(i: number) {
    let target: number, lChild: number, rChild: number
    while (i < this.data.length) {
      target = i, lChild = (i << 1) + 1, rChild = (i << 1) + 2
      if (lChild < this.data.length && this.data[lChild][0] < this.data[target][0]) target = lChild
      if (rChild < this.data.length && this.data[rChild][0] < this.data[target][0]) target = rChild
      if (i === target) return
      this.swap(i, target)
      i = target
    }
  }
  
  swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}
function rangeSum(nums: number[], n: number, left: number, right: number): number {
  let ans = 0, item: dataType
  const q = new Priority(), mod = 1e9 + 7
  //* 初始化
  nums.forEach((num, i) => q.push([num, i]))
  //* 获取升序数组
  for (let i = 1; i <= right && q.size(); i++) {
    item = q.pop() as dataType
    if (item[1] + 1 < nums.length) q.push([item[0] + nums[item[1] + 1], item[1] + 1])
    if (i >= left) ans = (item[0] + ans) % mod
  }
  return ans
}

export {}
