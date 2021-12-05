function maxSlidingWindow(nums: number[], k: number): number[] {
    const q: number[] = [], ret: number[] = []
    for (let i = 0; i < nums.length; i++) {
        //* 入队
        while (q.length && nums[q[q.length - 1]] < nums[i]) q.pop()
        q.push(i)
        //* 超出窗口弹出
        if (i - q[0] === k) q.shift()
        //* 当前下标达到窗口大小之后每移动一次记录一次
        if (i + 1 < k) continue
        ret.push(nums[q[0]])
    }
    return ret
}

export {}
