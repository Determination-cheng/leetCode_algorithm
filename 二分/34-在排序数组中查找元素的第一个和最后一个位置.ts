//* 01-0
function s_binarySearch (nums: number[], target: number) {
    let h = 0, t = nums.length - 1, mid: number
    while (h < t) {
        mid = ((h + t) >> 1) + 1
        if (nums[mid] <= target) h = mid
        else t = mid - 1
    }
    //* 找第二个值的时候已经可以肯定场上肯定存在目标值
    return h
}
//* 01-1
function b_binarySearch (nums: number[], target: number) {
    let h = 0, t = nums.length - 1, mid: number
    while (h < t) {
        mid = (h + t) >> 1
        if (nums[mid] >= target) t = mid
        else h = mid + 1
    }
    return nums[h] === target ? h : -1
}
function searchRange(nums: number[], target: number): number[] {
    let fir: number, sec: number
    fir = b_binarySearch(nums, target)
    if (fir === -1) return [-1, -1]
    sec = s_binarySearch(nums, target)
    return [fir, sec]
}

export {}
