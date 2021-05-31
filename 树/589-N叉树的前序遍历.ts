class TreeNode {
  val: number
  children: TreeNode[]
  constructor(val?: number, children?: TreeNode[]) {
    this.val = val ? val : 0
    this.children = children ? children : []
  }
}

function preorder(root: TreeNode | null): number[] {
  if (!root) return []
  const ans: number[] = []
  const run = (node: TreeNode) => {
    if (!node) return
    ans.push(node.val)
    for (let n of node.children) run(n)
  }
  run(root)
  return ans
}
