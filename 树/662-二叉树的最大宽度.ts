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

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0
  let max = 1, len, node, idx, l, r
  const queue: Array<[TreeNode, number]> = [[root, 1]]
  while (queue.length) {
    len = queue.length
    l = queue[0][1]
    for (let i = 0; i < len; i++) {
      [node, idx] = queue.shift()
      r = idx
      if (node.left) queue.push([node.left, 2 * (idx - l)])
      if (node.right) queue.push([node.right, 2 * (idx - l) + 1])
    }
    max = Math.max(max, r - l + 1)
  }
  return max
}
