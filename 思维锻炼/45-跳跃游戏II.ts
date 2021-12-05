
function jump(nums: number[]): number {
    if (nums.length < 2) return 0
    let cur = 0, maxPos = 0, maxLen = 0, next = 0, cnt = 1
    while (cur < nums.length) {
        next = maxPos = cur + nums[cur]
        // 如果能从当前位置直接跳到终点，则直接返回结果
        if (next >= nums.length - 1) break
        // 如果不能从当前位置直接跳到终点，则从当前位置的下一位置开始到当前位置能跳到的最大位置为止
        // 找步长最长的位置并跳到该位置
        for (let i = cur + 1; i <= maxPos; i++) {
            if (i + nums[i] > maxLen) {
                maxLen = i + nums[i]
                next = i
            }
        }
        cur = next
        cnt++
    }
    return cnt
}

export {}
