function binarySearch (nums: number[], target: number) {
    let h = 0, t = nums.length - 1, mid: number
    while (h <= t) {
        mid = (h + t) >> 1
        if (nums[mid] === target) return mid
        if (nums[mid] < target) h = mid + 1
        else t = mid - 1
    }
    return -1
}
function minOperations(nums: number[], x: number): number {
    //* 构建前缀和数组
    const sums = [0]
    nums.forEach((n, i) => sums.push(n + sums[i]))
    //* 左右计数
    let j: number, cnt: number, ans = -1
    for (let i = nums.length, s = 0; i >= 0; --i, s += nums[Math.max(i, 0)]) {
        j = binarySearch(sums, x - s)
        if (j === -1) continue
        cnt = nums.length - (i - j)
        if (cnt > nums.length) continue // 当i<=j的时候会发生这种情况
        if (ans === -1 || cnt < ans) ans = cnt
    }
    return ans
}
