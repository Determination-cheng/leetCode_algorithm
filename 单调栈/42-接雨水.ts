function trap(height: number[]): number {
    let sum = 0
    const s: number[] = []

    let now: number, l: number
    height.forEach((h, i) => {
        while (s.length && height[s[s.length - 1]] < h) {
            now = s.pop()!
            if (!s.length) continue
            l = s[s.length - 1]
            sum += (i - l - 1) * Math.min(height[l] - height[now], height[i] - height[now])
        }
        s.push(i)
    })

    return sum
}

export {}
