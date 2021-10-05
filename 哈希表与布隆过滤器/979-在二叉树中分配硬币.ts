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

type DataType = [steps: number, coins: number]

function dfs(node: TreeNode | null): DataType {
    if (!node) return [0, 0]
    const l = dfs(node.left), r = dfs(node.right)
    const dCoins = l[1] + r[1] + node.val - 1  // 该树需要和外界进行交换的硬币数量
    return [l[0] + r[0] + Math.abs(dCoins), dCoins]
}

function distributeCoins(root: TreeNode | null): number {
    return dfs(root)[0]
}

export {}
