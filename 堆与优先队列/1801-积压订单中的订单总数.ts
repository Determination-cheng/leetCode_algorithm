class Heap {
  // [价格, 订单数]
  public data: [number, number][]
  private readonly kind: boolean
  constructor(data: [number, number][], kind: 'big' | 'small') {
    this.data = data
    this.kind = kind === 'big'
    this.init()
  }
  private init() {
    for (let i = 1; i < this.data.length; i++) this.sortUp(i)
  }
  
  size() {
    return this.data.length
  }
  
  peek() {
    return this.data.length ? this.data[0] : null
  }
  
  push(val: [number, number]) {
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
        if (this.data[index][0] > this.data[parentIndex][0]) this.swap(index, parentIndex)
        else break
      } else {
        // 小顶堆
        if (this.data[index][0] < this.data[parentIndex][0]) this.swap(index, parentIndex)
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
        if (leftIndex < this.data.length && this.data[leftIndex][0] > this.data[target][0]) target = leftIndex
        if (rightIndex < this.data.length && this.data[rightIndex][0] > this.data[target][0]) target = rightIndex
      } else {
        // 小顶堆
        if (leftIndex < this.data.length && this.data[leftIndex][0] < this.data[target][0]) target = leftIndex
        if (rightIndex < this.data.length && this.data[rightIndex][0] < this.data[target][0]) target = rightIndex
      }
      if (target === index) break
      this.swap(index, target)
      index = target
    }
  }
  
  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

function getNumberOfBacklogOrders(orders: number[][]): number {
  let res = 0, min = 0
  const buy = new Heap([], "big")
  const sell = new Heap([], 'small')
  
  // 0 buy  1 sell
  orders.forEach(([price, amount, orderType]) => {
    if (orderType) {
      // sell
      while (amount) {
        if (buy.size() && buy.peek()[0] >= price) {
          min = Math.min(buy.peek()[1], amount)
          buy.peek()[1] -= min
          amount -= min
          if (buy.peek()[1] === 0) buy.pop()
        } else {
          sell.push([price, amount])
          break
        }
      }
    } else {
      // buy
      while (amount) {
        if (sell.size() && price >= sell.peek()[0]) {
          min = Math.min(amount, sell.peek()[1])
          sell.peek()[1] -= min
          amount -= min
          if (sell.peek()[1] === 0) sell.pop()
        } else {
          buy.push([price, amount])
          break
        }
      }
    }
  })
  
  // 处理积压订单
  while (buy.size() && sell.size() && buy.peek()[0] >= sell.peek()[0]) {
    min = Math.min(buy.peek()[1], sell.peek()[1])
    buy.peek()[1] -= min
    sell.peek()[1] -= min
    if (!buy.peek()[1]) buy.pop()
    if (!sell.peek()[1]) sell.pop()
  }
  
  while (buy.size()) res += buy.pop()[1]
  while (sell.size()) res += sell.pop()[1]
  
  return res % 1000000007
}
