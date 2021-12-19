function largestRectangleArea(heights: number[]): number {
    const l: number[] = []
    const r: number[] = []
    for (let i = 0; i < heights.length; i++) {
        l.push(-1)
        r.push(heights.length)
    }
    const s: number[] = []

    heights.forEach((height, i) => {
        while (s.length && height <= heights[s[s.length - 1]]) {
            r[s.pop()!] = i
        }
        if (s.length) {
            l[i] = s[s.length - 1]
        }
        s.push(i)
    })

    let ans = 0
    heights.forEach((height, i) => {
        ans = Math.max(ans, height * (r[i] - l[i] - 1))
    })
    return ans
}

export {}
