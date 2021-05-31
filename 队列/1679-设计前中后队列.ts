class FrontMiddleBackQueue {
  leftQueue: number[]
  rightQueue: number[]
  
  constructor() {
    this.leftQueue = []
    this.rightQueue = []
  }
  
  pushFront(val: number): void {
    this.update()
    this.leftQueue.unshift(val)
  }
  
  pushMiddle(val: number): void {
    if (this.leftQueue.length > this.rightQueue.length) this.rightQueue.unshift(this.leftQueue.pop())
    this.leftQueue.push(val)
    this.update()
  }
  
  pushBack(val: number): void {
    this.update()
    this.rightQueue.push(val)
  }
  
  popFront(): number {
    if (this.isEmpty()) return -1
    this.update()
    return this.leftQueue.shift()
  }
  
  popMiddle(): number {
    if (this.isEmpty()) return -1
    this.update()
    return this.leftQueue.pop()
  }
  
  popBack(): number {
    if (this.isEmpty()) return -1
    this.update()
    if (!this.rightQueue.length && this.leftQueue.length) return this.leftQueue.pop()
    return this.rightQueue.pop()
  }
  
  update(): void {
    if (this.leftQueue.length < this.rightQueue.length) {
      this.leftQueue.push(this.rightQueue.shift())
    } else if (this.leftQueue.length === this.rightQueue.length + 2) {
      this.rightQueue.unshift(this.leftQueue.pop())
    }
  }
  
  isEmpty(): boolean {
    return this.leftQueue.length === 0 && this.rightQueue.length === 0
  }
}
