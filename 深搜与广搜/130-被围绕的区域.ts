const offset = [[-1, 0], [1, 0], [0, -1], [0, 1]]
function dfs(x: number, y: number, board: string[][]) {
    board[x][y] = 'o'
    let dx: number, dy: number
    offset.forEach(([x1, y1]) => {
        dx = x1 + x, dy = y1 + y
        if (dx < 0 || dx >= board.length || dy < 0 || dy >= board[0].length) return
        if (board[dx][dy] !== 'O') return
        dfs(dx, dy, board)
    })
}

function solve(board: string[][]): void {
    const len = board[0].length
    //* 扫描四个边，对有'O'的格子进行深度遍历
    for (let x = 0; x < board.length; x++) {
        if (board[x][0] === 'O') dfs(x, 0, board)
        if (board[x][len - 1] === 'O') dfs(x, len - 1, board)
    }
    for (let y = 1; y < len - 1; y++) {
        if (board[0][y] === 'O') dfs(0, y, board)
        if (board[board.length - 1][y] === 'O') dfs(board.length - 1, y, board)
    }
    //* 'O'->'X' 'o' -> 'O'
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < len; y++) {
            if (board[x][y] === 'O') board[x][y] = 'X'
            else if (board[x][y] === 'o') board[x][y] = 'O'
        }
    }
}

export {}
