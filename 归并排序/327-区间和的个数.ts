let _lower: number, _upper: number, temp: number[] = []
function countTwoParts(nums: number[], l1: number, r1: number, l2: number, r2: number) {
  let ans = 0
  for (let a = l1, b = l1, i = l2; i <= r2; i++) {
    while (a <= r1 && nums[i] - nums[a] > _upper) a++
    while (b <= r1 && nums[i] - nums[b] >= _lower) b++
    ans += b - a
  }
  return ans
}

function mergeSort(arr: number[], l: number, r: number) {
  if (l >= r) return 0
  let ans = 0
  const mid = (l + r) >> 1
  ans += mergeSort(arr, l, mid)
  ans += mergeSort(arr, mid + 1, r)
  ans += countTwoParts(arr, l, mid, mid + 1, r)
  let p1 = l, p2 = mid + 1, k = l
  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && arr[p1] < arr[p2])) {
      temp[k++] = arr[p1++]
    } else {
      temp[k++] = arr[p2++]
    }
  }
  for (let i = l; i <= r; i++) arr[i] = temp[i]
  return ans
}

function countRangeSum(nums: number[], lower: number, upper: number): number {
  const sum = [0]
  nums.forEach((num, i) => sum.push(num + sum[i]))
  _lower = lower, _upper = upper, temp = new Array(sum.length).fill(0)
  return mergeSort(sum, 0, sum.length - 1)
}

export {}
