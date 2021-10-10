//* 1.定义一个二维矩阵
//* 2.该二维矩阵的元素类型有 { visited: boolean, val: number, distance: number }
//* 3.bfs 初始状态是所有为0的节点
//* 4.逐层向外扩展
type DataType = { visited: boolean, val: number, distance: number, x: number, y: number }
function bfs(mat: DataType[][]) {
    const res: number[][] = [], q: DataType[] = []
    const offset = [[-1, 0], [1, 0], [0, -1], [0, 1]]
    let cur: DataType, offsetNode: DataType, dx: number, dy: number
    //* 初始化
    mat.forEach((row, x) => {
        row.forEach((d, y) => !d.val && q.push(d))
    })
    while (q.length) {
        //* 取 + 弹
        cur = q.shift() as DataType
        //* 扩展
        offset.forEach(([x, y]) => {
            dx = x + cur.x, dy = y + cur.y
            if (dx < 0 || dx >= mat.length || dy < 0 || dy >= mat[0].length) return
            offsetNode = mat[dx][dy]
            if (!offsetNode.visited) {
                offsetNode.visited = true
                offsetNode.distance = cur.distance + 1
                q.push(offsetNode)
            }
        })
    }

    mat.forEach((row, x) => {
        res[x] = []
        row.forEach((d, y) => {
            res[x][y] = d.distance
        })
    })
    return res
}
function updateMatrix(mat: number[][]): number[][] {
    //* 初始化
    const dMat: DataType[][] = []
    mat.forEach((row, x) => {
        dMat[x] = []
        row.forEach((d, y) => {
            if (d === 0) dMat[x][y] = { visited: true, val: d, distance: 0, x, y }
            else dMat[x][y] = { visited: false, val: d, distance: 0, x, y }
        })
    })
    return bfs(dMat)
}

export {}
