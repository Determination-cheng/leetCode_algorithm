class MyQueue {
  popStack: number[]
  pushStack: number[]
  
  constructor() {
    this.popStack = []
    this.pushStack = []
  }
  
  push(x: number): void {
    this.pushStack.push(x)
  }
  
  pop(): number {
    this.update()
    return this.popStack.pop()
  }
  
  peek(): number {
    this.update()
    return this.popStack[this.popStack.length - 1]
  }
  
  empty(): boolean {
    return !this.popStack.length && !this.pushStack.length
  }
  
  update() {
    if (!this.popStack.length) {
      while (this.pushStack.length) this.popStack.push(this.pushStack.pop())
    }
  }
}
