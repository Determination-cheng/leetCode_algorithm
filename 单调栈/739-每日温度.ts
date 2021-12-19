function dailyTemperatures(temperatures: number[]): number[] {
    const ret: number[] = new Array(temperatures.length).fill(0)
    // 找后面第一个大于当前值的位置 —— 单调递减栈 (操作被弹出元素)
    // 记录下标
    const s: number[] = []
    let popVal = 0
    temperatures.forEach((t, i) => {
        while (s.length && temperatures[s[s.length - 1]] < t) {
            popVal = s.pop()!
            ret[popVal] = i - popVal
        }
        s.push(i)
    })
    return ret
}

export {}
