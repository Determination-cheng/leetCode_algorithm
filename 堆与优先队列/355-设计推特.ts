// @ts-nocheck
class TweetsHeap {
  // [tweetId, time]
  public data: [number, number][]
  constructor() {
    this.data = []
  }
  
  size() {
    return this.data.length
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
  
  clear () {
    this.data = []
  }
  
  private sortUp(index: number) {
    let parentIndex: number
    while (index) {
      parentIndex = (index - 1) >> 1
      if (this.data[index][1] > this.data[parentIndex][1]) this.swap(index, parentIndex)
      else break
      index = parentIndex
    }
  }
  
  private sortDown(index: number) {
    let leftIndex: number, rightIndex: number, target: number
    while (index < this.data.length) {
      leftIndex = (index << 1) + 1
      rightIndex = (index << 1) + 2
      target = index
      if (leftIndex < this.data.length && this.data[leftIndex][1] > this.data[target][1]) target = leftIndex
      if (rightIndex < this.data.length && this.data[rightIndex][1] > this.data[target][1]) target = rightIndex
      if (target === index) break
      this.swap(index, target)
      index = target
    }
  }
  
  private swap(i: number, j: number) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
  }
}

class Twitter {
  private time: number
  private users: {[key: number]: {followees: any, tweets: [number, number][]}}   // [tweetId, time]
  private tweetHeap: TweetsHeap
  constructor() {
    this.users = {}
    this.time = 0
    this.tweetHeap = new TweetsHeap()
  }
  
  postTweet(userId: number, tweetId: number): void {
    if (!this.users[userId]) this.users[userId] = {followees: new Set([userId]), tweets: []}
    this.users[userId].tweets.push([tweetId, this.time++])
  }
  
  getNewsFeed(userId: number): number[] {
    if (!this.users[userId]) this.users[userId] = {followees: new Set([userId]), tweets: []}
    this.users[userId].followees.forEach(followee => this.users[followee]?.tweets.forEach(t => this.tweetHeap.push(t)))
    const res: number[] = []
    while (this.tweetHeap.size() && res.length < 10) res.push(this.tweetHeap.pop()[0])
    this.tweetHeap.clear()
    return res
  }
  
  follow(followerId: number, followeeId: number): void {
    if (!this.users[followerId]) this.users[followerId] = {tweets: [], followees: new Set([followerId])}
    this.users[followerId].followees.add(followeeId)
  }
  
  unfollow(followerId: number, followeeId: number): void {
    this.users[followerId].followees.delete(followeeId)
  }
}
