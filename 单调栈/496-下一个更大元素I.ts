function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const ans = new Array(nums1.length).fill(-1)
    const s: number[] = [], r = new Array(nums2.length).fill(-1)
    nums2.forEach((num, i) => {
        while (s.length && num > nums2[s[s.length - 1]]) {
            r[s.pop()!] = num
        }
        s.push(i)
    })
    nums1.forEach((num, i) => {
        ans[i] = r[nums2.findIndex((n) => n === num)]
    })
    return ans
}

export {}
