interface DataType{
    visited: boolean
    x: number
    y: number
}
function calc(x: string, y: string) {
    let res = 0
    for (let i = 0; i < x.length; i++) res += parseInt(x[i])
    for (let i = 0; i < y.length; i++) res += parseInt(y[i])
    return res
}
function movingCount(m: number, n: number, k: number): number {
    if (!k) return 1
    //* 初始化
    let cur: DataType = { x: 0, y: 0, visited: true }, dx: number, dy: number, res = 1
    const q: DataType[] = [cur]
    const offset = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    const grid: DataType[][] = []
    for (let x = 0; x < m; x++) {
        grid[x] = []
        for (let y = 0; y < n; y++) {
            grid[x][y] = { visited: false, x, y }
        }
    }
    grid[0][0].visited = true

    //* 广度优先遍历
    while (q.length) {
        cur = q.shift() as DataType
        offset.forEach(([x, y]) => {
            dx = x + cur.x, dy = cur.y + y
            if (dx < 0 || dx > m - 1 || dy < 0 || dy > n - 1) return
            if (calc(`${dx}`, `${dy}`) > k) return
            if (grid[dx][dy].visited) return
            grid[dx][dy].visited = true
            q.push({ x: dx, y: dy, visited: true })
            res++
        })
    }
    return res
}

export {}
