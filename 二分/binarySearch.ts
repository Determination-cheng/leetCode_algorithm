//* 1.找到目标值
function binarySearch (nums: number[], target: number) {
    let h = 0, t = nums.length - 1, mid: number
    while (t >= h) {
        mid = (t + h) >> 1
        if (nums[mid] === target) return mid
        if (nums[mid] < target) h = mid + 1
        else t = mid - 1
    }
    return -1
}

//* 2. 01模型找到0(最后一个小于等于x的值)
function s_binarySearch (nums: number[], target: number) {
    let h = 0, t = nums.length - 1, mid: number
    while (h < t) {
        mid = ((h + t) >> 1) + 1
        if (nums[mid] <= target) h = mid
        else t = mid - 1
    }
    return h
}

//* 3. 01模型找到1(第一个大于等于x的值)
function b_binarySearch (nums: number[], target: number) {
    let h = 0, t = nums.length - 1, mid: number
    while (h < t) {
        mid = (h + t) >> 1
        if (nums[mid] >= target) t = mid
        else h = mid + 1
    }
    return h
}

export {}
