class TreeNode {
  val: number
  children: TreeNode[]
  constructor(val?: number, children?: TreeNode[]) {
    this.val = val ? val : 0
    this.children = children ? children : []
  }
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  const ans: number[][] = [], queue: TreeNode[] = [root]
  let len, node
  
  const run = (k = 0) => {
    len = queue.length
    for (let i = 0;i < len; i++) {
      if (k === ans.length) ans[k] = []
      node = queue.shift()
      if (k % 2 === 0) ans[k].push(node.val)
      else ans[k].unshift(node.val)
      
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (queue.length) run(k + 1)
  }
  run()
  return ans
}
