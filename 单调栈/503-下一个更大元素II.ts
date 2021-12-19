function nextGreaterElements(nums: number[]): number[] {
    const ret: number[] = new Array(nums.length).fill(-1)
    // 找下一个更大的 —— 单调递减栈
    // 记录下标
    const s: number[] = []
    // 执行两次是为了构建一个循环数组
    run(nums, s, ret)
    run(nums, s, ret)

    return ret
}

function run(nums: number[], s: number[], ret: number[]) {
    nums.forEach((num, i) => {
        while (s.length && num > nums[s[s.length - 1]]) {
            ret[s.pop()!] = num
        }
        s.push(i)
    })
}

export {}
