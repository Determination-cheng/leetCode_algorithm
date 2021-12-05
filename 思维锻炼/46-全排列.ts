function permute(nums: number[]): number[][] {
    if (nums.length === 1) return [nums]
    const res: number[][] = []
    const record = new Set<string>()
    nums.forEach(num => {
        const rest = nums.filter(n => n !== num)
        const restPermute = permute(rest)
        restPermute.forEach(arr => {
            arr.forEach((_, i) => {
                const temp = [...arr]
                temp.splice(i, 0, num)
                if (record.has(temp.toString())) return
                res.push(temp)
                record.add(temp.toString())
            })
        })
    })
    return res
}

export {}
