function searchInsert(nums: number[], target: number): number {
    let h = 0, t = nums.length - 1, mid: number
    while (h < t) {
        mid = (h + t) >> 1
        if (nums[mid] >= target) t = mid
        else h = mid + 1
    }
    return (h === nums.length - 1 && nums[h] < target) ? h + 1 : h
}
