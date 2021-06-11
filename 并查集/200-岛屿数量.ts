export {}

class UnionSet {
  private readonly boss: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number): number {
    return this.boss[index] = this.boss[index] === index ? index : this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    this.boss[this.find(a)] = this.find(b)
  }
}

function numIslands(grid: string[][]): number {
  const len = grid.length * grid[0]?.length
  if (!len) return 0
  const rowLen = grid[0].length
  const unionSet = new UnionSet(len)
  let res = 0
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        // 上边
        if (i - 1 >= 0 && grid[i - 1][j] === '1') {
          unionSet.merge(i * rowLen + j, (i - 1) * rowLen + j)
        }
        // 左边
        if (j - 1 >= 0 && grid[i][j - 1] === '1') {
          unionSet.merge(i * rowLen + j, i * rowLen + j - 1)
        }
      }
    }
  }
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < rowLen; j++) {
      if (grid[i][j] === '1' && unionSet.find(i * rowLen + j) === i * rowLen + j) {
        res++
      }
    }
  }
  return res
}
