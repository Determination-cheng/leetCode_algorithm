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

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  const ans: number[] = []
  
  const run = (node: TreeNode) => {
    if (!node) return
    ans.push(node.val)
    if (node.left) run(node.left)
    if (node.right) run(node.right)
  }
  run(root)
  
  return ans
}
