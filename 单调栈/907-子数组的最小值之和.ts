function sumSubarrayMins(arr: number[]): number {
    let ans = 0
    // sums 是一组关键节点(单调栈的大小)的集合
    // 每个关键节点记录的是各自的最小值之和
    const sums = new Array(arr.length + 1).fill(0), s: number[] = [], mod = BigInt(1e9 + 7)
    arr.forEach((num, i) => {
        while (s.length && num <= arr[s[s.length - 1]]) s.pop()
        const ind = s.length ? s[s.length - 1] : -1 // 以当前值结尾的区间中的最小值的下标
        s.push(i)

        // 关键节点的值为 关键节点之前的和值 + 以当前数字为末尾同时当前数字是最小值的所有区间的最小值之和
        sums[s.length] = Number(BigInt(sums[s.length - 1] + arr[i] * (i - ind)) % mod)
        ans += sums[s.length]
        ans = Number(BigInt(ans) % mod)
    })

    return ans
}

export {}
