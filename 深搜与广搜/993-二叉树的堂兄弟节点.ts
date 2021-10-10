class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}
//* 1.dfs
// type ResType = { parentNode: TreeNode | null, depth: number }
// // 找一个节点的层数，和其父节点
// function dfs(root: TreeNode | null, target: number, parentNode: TreeNode | null, depth: number, res: ResType) {
//     if (!root) return false
//     if (root.val === target) {
//         res.parentNode = parentNode
//         res.depth = depth
//         return true
//     }
//     if (dfs(root.left, target, root, depth + 1, res)) return true
//     else if (dfs(root.right, target, root, depth + 1, res)) return true
//     return false
// }
// function isCousins(root: TreeNode | null, x: number, y: number): boolean {
//     if (!root) return false
//     const xRes: ResType = { parentNode: null, depth: 0 },
//         yRes: ResType = {parentNode: null, depth: 0}
//     dfs(root, x, null, 1, xRes)
//     dfs(root, y, null, 1, yRes)
//     return xRes.parentNode !== yRes.parentNode && xRes.depth === yRes.depth
// }

//* 2.bfs
class NodeType {
    node: TreeNode
    depth: number
    parent: TreeNode | null
    constructor(node: TreeNode, depth: number, parent: TreeNode | null) {
        this.node = node
        this.depth = depth
        this.parent = parent
    }
}
function bfs(root: TreeNode | null, x: number, y: number) {
    if (!root) return false
    const q: NodeType[] = [new NodeType(root, 1, null)]
    let cur: NodeType, p1: TreeNode | null = null, p2: TreeNode | null = null, d1 = -1, d2 = -1
    while (q.length) {
        //* 1.取状态 + 弹状态
        cur = q.shift() as NodeType
        if (cur.node.val === x) {
            p1 = cur.parent
            d1 = cur.depth
        } else if (cur.node.val === y) {
            p2 = cur.parent
            d2 = cur.depth
        }
        if (p1 && p2 && p1 !== p2 && d1 > -1 && d1 === d2) return true
        //* 2.扩展状态
        //! 注意这里不能将 depth 作为一个变量提取出来，因为存在竞争条件
        if (cur.node.left) q.push(new NodeType(cur.node.left, cur.depth + 1, cur.node))
        if (cur.node.right) q.push(new NodeType(cur.node.right, cur.depth + 1, cur.node))

        cur.depth++
    }
    console.log(p1, p2, d1, d2)
    return d1 === d2 && p1 !== p2
}

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
    if (!root) return false
    return bfs(root, x, y)
}

export {}
