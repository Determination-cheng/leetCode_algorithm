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

function countNodes(root: TreeNode | null): number {
  if (!root) return 0
  let ans = 0, len = 0
  const queue: TreeNode[] = [root]
  
  const run = () => {
    len = queue.length
    ans += len
    for (let i = 0; i < len; i++) {
      if (queue[0].left) queue.push(queue[0].left)
      if (queue[0].right) queue.push(queue[0].right)
      queue.shift()
    }
    if (queue.length) run()
  }
  run()
  
  return ans
}
