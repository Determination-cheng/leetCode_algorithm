type NodeType = {
    val: 0 | 1
    visited: boolean
    x: number
    y: number
}
type queueType = NodeType & { step: number }

function bfs(grid: NodeType[][]) {
    const q: Array<queueType> = [{...grid[0][0], step: 1}], len = grid.length
    const offset = [
        [-1, 0], [1, 0], [0, -1], [0, 1],   // 上下左右
        [-1, -1], [-1, 1], [1, 1], [1, -1]  // 左上 右上 右下 左下
    ]
    let cur: queueType, offsetNode: NodeType, dx: number, dy: number
    while (q.length) {
        cur = q.shift() as queueType
        if (cur.x === len - 1 && cur.y === len - 1) return cur.step
        offset.forEach(([x, y]) => {
            dx = cur.x + x, dy = cur.y + y
            if (dx < 0 || dx >= len || dy < 0 || dy >= len) return
            offsetNode = grid[dx][dy]
            if (offsetNode.val || offsetNode.visited) return
            offsetNode.visited = true
            q.push({ ...offsetNode, step: cur.step + 1 })
        })
    }
    return -1
}

function shortestPathBinaryMatrix(grid: number[][]): number {
    if (grid[0][0]) return -1
    const nGrid: NodeType[][] = []
    grid.forEach((row, x) => {
        nGrid[x] = []
        row.forEach((num, y) => {
            nGrid[x][y] = { val: num as 0 | 1, visited: false, x, y }
        })
    })
    return bfs(nGrid)
}

export {}
