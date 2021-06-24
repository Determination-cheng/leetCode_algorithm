//* 1.最朴素的快排
function quick_sort_v1 (arr: number[], l: number, r: number) {
  if (l >= r) return
  let x = l, y = r, base = arr[l] // 判断大小的基准值
  while(x < y) {
    // 左小右大
    while (x < y && arr[y] > base) y--
    if (x < y) arr[x++] = arr[y]
    while (x < y && arr[x] <= base) x++
    if (x < y) arr[y--] = arr[x]
  }
  arr[x] = base
  quick_sort_v1(arr, l, x - 1)
  quick_sort_v1(arr, x + 1, r)
}

//* 2.单边递归法
function quick_sort_v2 (arr: number[], l: number, r: number) {
  let x: number, y: number, base: number
  while (l < r) {
    x = l
    y = r
    base = arr[l]
    while (x < y) {
      while (x < y && arr[y] > base) y--
      if (x < y) arr[x++] = arr[y]
      while (x < y && arr[x] <= base) x++
      if (x < y) arr[y--] = arr[x]
    }
    arr[x] = base
    quick_sort_v2(arr, x + 1, r)
    r = x - 1
  }
}

//* 3.模拟STL中实现的快速排序，使用插入排序优化
// 分区大小
const threshold = 16

// 对三个数进行升序排序,取中间值
function median(a: number, b: number, c: number): number {
  if (a > b) [a, b] = [b, a]
  if (a > c) [a, c] = [c, a]
  if (b > c) [b, c] = [c, b]
  return b
  
  // return [a, b, c].sort((a, b) => a - b)[1]
}

function __quick_sort_v3(arr: number[], l: number, r: number) {
  let x: number, y: number, base: number
  while (r - l > threshold) {
    x = l
    y = r
    base = median(arr[l], arr[(l + r) >> 1], arr[r])
    do {
      while (x < y && arr[x] <= base) x++
      while (x < y && arr[y] >= base) y--
      if (x <= y) {
        [arr[x], arr[y]] = [arr[y], arr[x]]
        x++
        y--
      }
    } while (x <= y)
    __quick_sort_v3(arr, x, r)
    r = y // 如果上面不用 <=，这里就要用 y - 1
  }
}

function insert_sort (arr: number[], l: number, r: number) {
  // 找到最小值并将其放在第一位
  let ind = l
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < arr[ind]) ind = i
  }
  while (ind > l) {
    [arr[ind], arr[ind - 1]] = [arr[ind - 1], arr[ind]]
    ind--
  }
  // 遍历排序
  let j: number
  for (let i = l + 2; i <= r; i++) {
    j = i
    while (arr[j] < arr[j - 1]) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
      j--
    }
  }
}

function quick_sort_v3 (arr: number[], l: number, r: number) {
  __quick_sort_v3(arr, l, r)
  insert_sort(arr, l, r)
}
// ************************************

function test () {
  let arr = [5,2,3,1]
  quick_sort_v2(arr, 0, arr.length - 1)
  console.log(arr)
}
test()
