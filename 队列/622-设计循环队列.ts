class MyCircularQueue {
  queue: number[]
  frontPointer: number
  rearPointer: number
  cnt: number
  constructor(k: number) {
    this.queue = new Array(k)
    this.frontPointer = 0
    this.rearPointer = 0
    this.cnt = 0
  }
  
  enQueue(value: number): boolean {
    if (this.isFull()) return false
    this.queue[this.rearPointer] = value
    this.rearPointer = (this.rearPointer + 1) % this.queue.length
    this.cnt++
    return true
  }
  
  deQueue(): boolean {
    if (this.isEmpty()) return false
    this.frontPointer = (this.frontPointer + 1) % this.queue.length
    this.cnt--
    return true
  }
  
  Front(): number {
    if (this.isEmpty()) return -1
    return this.queue[this.frontPointer]
  }
  
  Rear(): number {
    if (this.isEmpty()) return -1
    return this.queue[(this.rearPointer - 1 + this.queue.length) % this.queue.length]
  }
  
  isEmpty(): boolean {
    return this.cnt === 0
  }
  
  isFull(): boolean {
    return this.cnt === this.queue.length
  }
}
