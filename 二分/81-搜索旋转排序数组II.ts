function search(nums: number[], target: number): boolean {
    if (!nums.length) return false
    if (nums[0] === target || nums[nums.length - 1] === target) return true
    //* 设定两区间的头和尾
    let l = 0, r = nums.length - 1
    while (l < r && nums[l] === nums[0]) l++
    while (l < r && nums[r] === nums[nums.length - 1]) r--
    const head = l, tail = r
    //* 定位元素
    let mid: number
    while (l <= r) {
        mid = (l + r) >> 1
        if (nums[mid] === target) return true
        //* 假如在右区间
        if (nums[mid] < nums[tail]) {
            if (nums[mid] < target && target <= nums[tail]) l = mid + 1
            else r = mid - 1
        } else {
            //* 在左区间
            if (nums[head] <= target && target < nums[mid]) r = mid - 1
            else l = mid + 1
        }
    }
    return false
}

export {}
