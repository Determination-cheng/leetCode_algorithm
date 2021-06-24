export {}
// function quick_sort_v1(arr: number[], l: number, r: number) {
//   if (l >= r) return
//   let x = l, y = r, base = arr[l]
//   while (x < y) {
//     while (x < y && arr[y] > base) y--
//     if (x < y) arr[x++] = arr[y]
//     while (x < y && arr[x] <= base) x++
//     if (x < y) arr[y--] = arr[x]
//   }
//   arr[x] = base
//   quick_sort_v1(arr, l, x - 1)
//   quick_sort_v1(arr, x + 1, r)
// }
// function sortArray(nums: number[]): number[] {
//   quick_sort_v1(nums, 0, nums.length - 1)
//   return nums
// }

// function quick_sort_v2(arr: number[], l: number, r: number) {
//   let x: number, y: number, base: number
//   while (l < r) {
//     x = l
//     y = r
//     base = arr[l]
//     // base = median(arr[l], arr[r], arr[(l + r) >> 1])
//     while (x < y) {
//       while (x < y && arr[y] > base) y--
//       if (x < y) arr[x++] = arr[y]
//       while (x < y && arr[x] <= base) x++
//       if (x < y) arr[y--] = arr[x]
//     }
//     arr[x] = base
//     quick_sort_v2(arr, x + 1, r)
//     r = x - 1
//   }
// }

// const threshold = 16
// function median(a: number, b: number, c: number) {
//   if (a > b) [a, b] = [b, a]
//   if (a > c) [a, c] = [c, a]
//   if (b > c) [b, c] = [c, b]
//   return b
// }
//
// function __quick_sort_v3(arr: number[], l: number, r: number) {
//   let x: number, y: number, base: number
//   while (r - l > threshold) {
//     x = l
//     y = r
//     base = median(arr[l], arr[r], arr[(l + r) >> 1])
//     do {
//       while (x < y && arr[x] <= base) x++
//       while (x < y && arr[y] >= base) y--
//       if (x <= y) {
//         [arr[x], arr[y]] = [arr[y], arr[x]]
//         x++
//         y--
//       }
//     } while (x <= y)
//     __quick_sort_v3(arr, x, r)
//     r = y
//   }
// }
//
// function insert_sort(arr: number[], l: number, r: number) {
//   let ind = l
//   for (let i = l + 1; i <= r; i++) {
//     if (arr[i] < arr[ind]) ind = i
//   }
//   while (ind > l) {
//     [arr[ind], arr[ind - 1]] = [arr[ind - 1], arr[ind]]
//     ind--
//   }
//
//   let j: number
//   for (let i = l + 2; i <= r; i++) {
//     j = i
//     while (arr[j] < arr[j - 1]) {
//       [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
//       j--
//     }
//   }
// }
//
// function sortArray(nums: number[]): number[] {
//   __quick_sort_v3(nums, 0, nums.length - 1)
//   insert_sort(nums, 0, nums.length - 1)
//   return nums
// }
