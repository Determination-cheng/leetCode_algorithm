class RecentCounter {
  queue: number[]
  constructor() {
    this.queue = []
  }
  
  ping(t: number): number {
    this.queue.push(t)
    while (t - 3000 > this.queue[0]) this.queue.shift()
    return this.queue.length
  }
}
