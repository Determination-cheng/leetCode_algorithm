function maxSlidingWindow(nums: number[], k: number): number[] {
  const res: number[] = [], queue: number[] = []
  let index = 0
  while (index < nums.length) {
    // 维护队列的长度
    if (queue.length && queue[0] + k <= index) queue.shift()
    // 维护队列的最大值，保证队列头部是窗口的最大值
    while (queue.length && nums[queue[queue.length - 1]] < nums[index]) {
      queue.pop()
    }
    queue.push(index)
    index++
    if (index >= k) res.push(nums[queue[0]])
  }
  return res
}
