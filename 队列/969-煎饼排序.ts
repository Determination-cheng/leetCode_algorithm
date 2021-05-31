//* 翻转数组前k项
function reverse(arr: number[], k: number) {
  for (let i = 0, j = k; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
}

function pancakeSort(arr: number[]): number[] {
  const ans: number[] = [], arrClone = [...arr]
  let max, index
  while (arrClone.length > 1) {
    //* 1.找出最大值
    max = Math.max(...arrClone)
    // @ts-ignore
    index = arrClone.findIndex(v => v === max)
    //* 2.先把它弄到数组头，再弄到数组尾，再抛出
    if (index > 0) ans.push(index + 1)
    reverse(arrClone, index)
    reverse(arrClone, arrClone.length - 1)
    ans.push(arrClone.length)
    arrClone.pop()
  }
  return ans
}
