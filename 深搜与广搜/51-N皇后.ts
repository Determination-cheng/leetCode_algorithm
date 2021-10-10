interface MarkType { mid: Array<0 | 1>; left: Array<0 | 1>; right: Array<0 | 1>; }
function dfs(row: number, n: number, { mid, left, right }: MarkType, solutions: string[][], res: string[][]) {
    if (row === n) {
        const solution: string[] = []
        solutions.forEach(row => solution.push(row.join('')))
        res.push(solution)
        return
    }
    let l: number, r: number
    for (let i = 0; i < n; i++) {
        l = row + i, r = row - i + n
        if (!mid[i] && !left[l] && !right[r]) {
            //* 本层递归处理
            mid[i] = 1, left[l] = 1, right[r] = 1
            solutions[row][i] = 'Q'
            //* 向下递归
            dfs(row + 1, n, { mid, left, right }, solutions, res)
            //* 回溯
            solutions[row][i] = '.'
            mid[i] = 0, left[l] = 0, right[r] = 0
        }
    }
}
function solveNQueens(n: number): string[][] {
    const res: string[][] = [], solutions: string[][] = []
    for (let i = 0; i < n; i++) solutions.push(new Array(n).fill('.'))
    const mark: MarkType = {
        mid: new Array(n).fill(0),
        left: new Array(2 * n).fill(0),
        right: new Array(2 * n).fill(0),
    }
    dfs(0, n, mark, solutions, res)
    return res
}

export {}
