class TreeNode {
  val: number
  children: TreeNode[]
  constructor(val?: number, children?: TreeNode[]) {
    this.val = val ? val : 0
    this.children = children ? children : []
  }
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const ans: number[][] = [], queue: TreeNode[] = [root]
  let node, len
  const run = (k = 0) => {
    if (k === ans.length) ans[k] = []
    len = queue.length
    for (let i = 0; i < len; i++) {
      node = queue.shift()
      if (k % 2 === 1) {
        ans[k].unshift(node.val)
      } else {
        ans[k].push(node.val)
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (queue.length) run(k + 1)
  }
  run()
  return ans
}
