function topKFrequent(words: string[], k: number): string[] {
  const counter: { [key: string]: number } = {}
  const smallHeap: [string, number][] = []
  words.forEach(word => counter[word] = counter[word] ? ++counter[word] : 1)
  let i = 0
  for (let key in counter) {
    if (i < k) {
      smallHeap.push([key, counter[key]])
      if (i === k - 1) initHeap(counter, smallHeap, k)
    } else if (counter[key] > smallHeap[0][1] || (counter[key] === smallHeap[0][1] && key < smallHeap[0][0])) {
      smallHeap[0] = [key, counter[key]]
      sortDown(counter, smallHeap, k, 0)
    }
    i++
  }
  const temp = smallHeap.sort((a, b) => {
    if (a[1] > b[1]) return -1
    else if (a[1] < b[1]) return 1
    else {
      if (a[0] > b[0]) return 1
      else if (a[0] < b[0]) return -1
    }
  })
  return temp.map(item => item[0])
}

function initHeap(map: { [key: string]: number }, arr: [string, number][], len: number) {
  for (let i = len >> 1; i >= 0; i--) sortDown(map, arr, len, i)
}

function sortDown(map: { [key: string]: number }, arr: [string, number][], len: number, index: number) {
  const leftIndex = (index << 1) + 1, rightIndex = (index << 1) + 2
  let target = index
  
  if (leftIndex < len && (
    (map[arr[leftIndex][0]] < map[arr[target][0]]) ||
    ((map[arr[leftIndex][0]] === map[arr[target][0]]) && (arr[leftIndex][0] > arr[target][0]))
  )) {
    target = leftIndex
  }
  if (rightIndex < len && (
    (map[arr[rightIndex][0]] < map[arr[target][0]]) ||
    ((map[arr[rightIndex][0]] === map[arr[target][0]]) && (arr[rightIndex][0] > arr[target][0]))
  )) {
    target = rightIndex
  }
  if (target !== index) {
    swap(arr, target, index)
    sortDown(map, arr, len, target)
  }
}

function swap(arr: any[], i: number, j: number) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
