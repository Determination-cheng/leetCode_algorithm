
function find132pattern(nums: number[]): boolean {
    const l = new Array(nums.length), s: number[] = []
    l[0] = Infinity
    // 记录每个值左边的最小值
    for (let i = 1; i < nums.length; i++) l[i] = Math.min(l[i - 1], nums[i - 1])

    let rVal = -Infinity
    for (let i = nums.length - 1; i >= 0; i--) {
        while (s.length && nums[i] > s[s.length - 1]) {
            rVal = s.pop()!
        }
        s.push(nums[i])
        if (l[i] < nums[i] && nums[i] > rVal && rVal > l[i]) return true
    }

    return false
}

export {}
