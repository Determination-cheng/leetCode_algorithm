type dataType = [val: number, ind: number, cnt: number]
function mergeSort(data: dataType[], l: number, r: number) {
  if (l >= r) return
  const mid = (l + r) >> 1, temp: dataType[] = []
  mergeSort(data, l, mid)
  mergeSort(data, mid + 1, r)
  let p1 = l, p2 = mid + 1
  while (p1 <= mid || p2 <= r) {
    if (p2 > r || (p1 <= mid && data[p1][0] > data[p2][0])) {
      data[p1][2] += r - p2 + 1
      temp.push(data[p1++])
    } else {
      temp.push(data[p2++])
    }
  }
  for (let i = l; i <= r; i++) data[i] = temp[i - l]
}

function countSmaller(nums: number[]): number[] {
  const data: dataType[] = [], ans: number[] = []
  nums.forEach((num, i) => data.push([num, i, 0]))
  mergeSort(data, 0, data.length - 1)
  data.forEach(d => ans[d[1]] = d[2])
  return ans
}

export {}
