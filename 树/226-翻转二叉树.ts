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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null
  if (root.left || root.right) [root.left, root.right] = [root.right, root.left]
  invertTree(root.left)
  invertTree(root.right)
  return root
}
