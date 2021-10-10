function dfs(i: number, target: number, nums: number[], h: Map<string, number>): number {
    let ans = 0
    if (i === nums.length) return target === 0 ? 1 : 0
    if (h.has(`${i}-${target}`)) return h.get(`${i}-${target}`) as number
    ans += dfs(i + 1, target + nums[i], nums, h)
    ans += dfs(i + 1, target - nums[i], nums, h)
    h.set(`${i}-${target}`, ans)
    return ans
}
function findTargetSumWays(nums: number[], target: number): number {
    const h = new Map<string, number>() // i^target -> ans
    return dfs(0, target, nums, h)
}

export {}
