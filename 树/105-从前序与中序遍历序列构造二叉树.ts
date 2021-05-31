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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length) return null
  const root = new TreeNode(preorder[0])
  const idx = inorder.indexOf(preorder[0])
  //* 恢复左子树
  root.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
  //* 恢复右子树
  root.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))
  return root
}
