function exclusiveTime(n: number, logs: string[]): number[] {
  const ans = (new Array(n) as any).fill(0)
  let go = 0
  
  const next = () => {
    let duration = 0
    const start = logs[go].split(':')
    // 找到当前任务的结束位置，如果下一位置是start，说明是子任务
    while (++go < logs.length - 1 && logs[go].indexOf('e') === -1) {
      duration = duration + next()
    }
    const end = logs[go].split(':')
    const res = Number(end[2]) - Number(start[2]) + 1 - duration
    ans[Number(start[0])] += res
    return res + duration
  }
  
  while (go < logs.length - 1) {
    next()
    go++
  }
  
  return ans
}
