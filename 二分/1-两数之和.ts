type dataType = [val: number, ind: number]
function binarySearch (nums: dataType[], l: number, target: number) {
    let h = l, t = nums.length - 1, mid: number
    while (h <= t) {
        mid = (h + t) >> 1
        if (nums[mid][0] === target) return nums[mid][1]
        if (nums[mid][0] < target) h = mid + 1
        else t = mid - 1
    }
    return -1
}
function twoSum(nums: number[], target: number): number[] {
    const data: dataType[] = [], ret: number[] = []
    let ind: number
    nums.forEach((val, i) => data.push([val, i]))
    mergeSort(data, 0, nums.length - 1)
    for (let i = 0; i < data.length - 1; i++) {
        ind = binarySearch(data, i + 1, target - data[i][0])
        if (ind > -1) ret.push(data[i][1], ind)
    }
    return ret
}
//* 归并排序
function mergeSort (data: dataType[], l: number, r: number) {
    if (l >= r) return
    const mid = (l + r) >> 1
    mergeSort(data, l, mid)
    mergeSort(data, mid + 1, r)
    const temp: dataType[] = []
    let p1 = l, p2 = mid + 1
    while (p1 <= mid || p2 <= r) {
        if (p2 > r || (p1 <= mid && data[p1][0] < data[p2][0])) temp.push(data[p1++])
        else temp.push(data[p2++])
    }
    temp.forEach((v, i) => data[l + i] = v)
}

export {}
