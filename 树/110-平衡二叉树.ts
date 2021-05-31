class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ? val : 0
    this.left = left ? left : null
    this.right = right ? right : null
  }
}

function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true
  // 获取一棵树的高度
  // 如果不平衡，返回负数
  const getHeight = (node: TreeNode) => {
    if (!node) return 0
    const l = getHeight(node.left)
    const r = getHeight(node.right)
    // 左子树或者右子树不平衡
    if (l < 0 || r < 0) return -2
    // 左子树和右子树比较不平衡
    if (Math.abs(l - r) > 1) return -2
    return Math.max(l, r) + 1
  }
  return getHeight(root) >= 0
}
