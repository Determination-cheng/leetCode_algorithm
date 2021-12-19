
function maxSumMinProduct(nums: number[]): number {
    const s: number[] = [], sums = [0], mod = BigInt(1e9 + 7)
    const l = new Array(nums.length).fill(-1)
    const r = new Array(nums.length).fill(nums.length)
    nums.forEach((num, i) => {
        sums.push(num + sums[i])
        while (s.length && num <= nums[s[s.length - 1]]) {
            r[s.pop()!] = i
        }
        if (s.length) l[i] = s[s.length - 1]
        s.push(i)
    })

    let max = BigInt(0), temp = BigInt(0)
    nums.forEach((num, i) => {
        temp = BigInt(num) * BigInt((sums[r[i]] - sums[l[i] + 1]))
        if (temp > max) max = temp
    })
    return Number(max % mod)
}

export {}
