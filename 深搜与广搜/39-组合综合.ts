function dfs(ind: number, target: number, nums: number[], buff: number[], res: number[][]) {
    if (target < 0 || ind === nums.length) return
    if (target === 0) {
        res.push(buff.slice())
        return
    }
    dfs(ind + 1, target, nums, buff, res)   //* 用来推进递归初始位
    //* 以下三行用来处理当前递归位
    buff.push(nums[ind])
    dfs(ind, target - nums[ind], nums, buff, res)
    buff.pop()
}
function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [], buff: number[] = []
    dfs(0, target, candidates, buff, res)
    return res
}

export {}