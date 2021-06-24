function three_partition(arr: number[], l: number, r: number, mid: number) {
  if (l >= r) return
  let x = 0, y = r, i = l
  while (i <= y) {
    if (arr[i] === mid) i++
    else if (arr[i] < mid) {
      [arr[x], arr[i]] = [arr[i], arr[x]]
      x++
      i++
    } else if (arr[i] > mid) {
      [arr[y], arr[i]] = [arr[i], arr[y]]
      y--
    }
  }
}
function sortColors(nums: number[]): void {
  three_partition(nums, 0, nums.length - 1, 1)
}
