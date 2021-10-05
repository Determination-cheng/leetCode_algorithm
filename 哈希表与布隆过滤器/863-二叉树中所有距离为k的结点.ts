//! 1.改造二叉树 -> 递归
// class TreeNode {
//     val: number
//     left: TreeNode | null
//     right: TreeNode | null
//     parent: TreeNode | null
//     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null, parent?: TreeNode | null) {
//         this.val = val === undefined ? 0 : val
//         this.left = left === undefined ? null : left
//         this.right = right === undefined ? null : right
//         this.parent = parent === undefined ? null : parent
//     }
// }
//* 用来改造二叉树，使得每个节点都可以向上访问
// function dfs(root: TreeNode | null) {
//     if (!root) return
//     if (root.left) {
//         root.left.parent = root
//         dfs(root.left)
//     }
//     if (root.right) {
//         root.right.parent = root
//         dfs(root.right)
//     }
// }
//* 向下找目标节点
// function getRes(node: TreeNode | null, k: number, res: number[], map: Map<TreeNode, boolean>) {
//     if (!node || k < 0 || map.has(node)) return
//     // 以前找过的就不找了
//     map.set(node, true)
//     // 如果k为0就是要找的节点了
//     if (!k) {
//         res.push(node.val)
//     }
//     else {
//         // k还是大于0的时候就继续在左右子树中找
//         getRes(node.left, k - 1, res, map)
//         getRes(node.right, k - 1, res, map)
//     }
// }
// function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
//     if (!root) return []
//     const res: number[] = [], nodeMap: Map<TreeNode, boolean> = new Map()
//     let targetNode = target
//     //* 改造二叉树
//     dfs(root)
//     //* 从target处向下找
//     getRes(target, k, res, nodeMap)
//     //* 从target处向上找
//     while (targetNode?.parent && k > 0) {
//         targetNode = targetNode.parent
//         getRes(targetNode, --k, res, nodeMap)
//     }
//
//     return res
// }

//! 2.通过分析结构
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

//* 向下找目标节点
function dfs(root: TreeNode | null, step: number, k: number, res: number[]) {
    if (!root || k < 0) return
    if (step === k) {
        res.push(root.val)
        return
    }
    dfs(root.left, step + 1, k, res)
    dfs(root.right, step + 1, k, res)
}

//* 统一管理向各个方向找的方法
function getRes(root: TreeNode | null, target: TreeNode | null, k: { num: number }, res: number[]): TreeNode | null {
    if (!root) return null
    // 当前节点为目标节点的情况下，往目标节点的下面找
    if (root === target) {
        dfs(root, 0, k.num, res)
        return root
    }
    // 往目标节点的上面找
    if (getRes(root.left, target, k, res)) {
        k.num -= 1
        if (!k.num) res.push(root.val)
        dfs(root.right, 0, k.num - 1, res)
        return target
    } else if (getRes(root.right, target, k, res)) {
        k.num -= 1
        if (!k.num) res.push(root.val)
        dfs(root.left, 0, k.num - 1, res)
        return target
    }
    return null
}

function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    const res: number[] = []
    getRes(root, target, {num: k}, res)
    return res
}


export {}
