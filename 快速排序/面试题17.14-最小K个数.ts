export {}

const threshold = 16
function median(a: number, b: number, c: number) {
  if (a > b) [a, b]= [b, a]
  if (a > c) [a, c] = [c, a]
  if (b > c) [b, c] = [c, b]
  return b
}
function __quick_sort(arr: number[], l: number, r: number) {
  let x: number, y: number, base: number
  while (r - l > threshold) {
    x = l
    y = r
    base = median(arr[l], arr[r], arr[(l + r) >> 1])
    do {
      while (x < y && arr[x] <= base) x++
      while (x < y && arr[y] >= base) y--
      if (x <= y) {
        [arr[x], arr[y]] = [arr[y], arr[x]]
        x++
        y--
      }
    } while (x <= y)
    __quick_sort(arr, x, r)
    r = y
  }
}
function insert_sort(arr: number[], l: number, r: number) {
  // 找最小值
  let ind = l
  for (let i = l + 1; i < arr.length; i++) {
    if (arr[i] < arr[ind]) ind = i
  }
  while (ind > l) {
    [arr[ind], arr[ind - 1]] = [arr[ind - 1], arr[ind]]
    ind--
  }
  // 排序
  let j: number
  for (let i = l + 2; i <= r; i++) {
    j = i
    while (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  }
}
function quick_sort(arr: number[], l: number, r: number) {
  __quick_sort(arr, l, r)
  insert_sort(arr, l, r)
}
function smallestK(arr: number[], k: number): number[] {
  quick_sort(arr, 0, arr.length - 1)
  return arr.slice(0, k)
}
