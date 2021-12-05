function shortestSubarray(nums: number[], k: number): number {
    const sums = [0]
    nums.forEach((num, i) => sums.push(num + sums[i]))

    const q = [0]
    let pos = -1, res = -1
    for (let i = 1; i < sums.length; i++) {
        while (q.length && sums[i] - sums[q[0]] >= k) pos = q.shift()!
        if (pos > -1 && (i - pos < res || res === -1)) res = i - pos
        while (q.length && sums[i] < sums[q[q.length - 1]]) q.pop()
        q.push(i)
    }

    return res
}

export {}
