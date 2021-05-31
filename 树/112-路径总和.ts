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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false
  if (!root.left && !root.right) return root.val === targetSum
  if (root.left && hasPathSum(root.left, targetSum - root.val)) return true
  if (root.right && hasPathSum(root.right, targetSum - root.val)) return true
  return false
}
