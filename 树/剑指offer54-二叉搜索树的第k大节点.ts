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

//* 1.先通过中序遍历拿到一个递增的数组，再取倒数第k个元素
// function inorder(node: TreeNode, ans: number[]) {
//   if (!node) return
//   inorder(node.left, ans)
//   ans.push(node.val)
//   inorder(node.right, ans)
// }
// function kthLargest(root: TreeNode | null, k: number): number {
//   if (!root) return 0
//   const ans: number[] = []
//   inorder(root, ans)
//   return ans[ans.length - k]
// }

//* 2.先算出右子树的数量 cnt_r
//*   k <= cnt_r 在右子树
//*   k === cnt_r + 1  根
//*   k > cnt_r 在左子树
function counter(node: TreeNode, count = 0) {
  if (!node) return 0
  return count + counter(node.left) + counter(node.right) + 1
}
function getInorder(node: TreeNode | null, ans: number[] = []) {
  if (!node) return
  getInorder(node.left, ans)
  ans.push(node.val)
  getInorder(node.right, ans)
}
function kthLargest(root: TreeNode | null, k: number): number {
  if (!root) return 0
  const ans: number[] = []
  const count = counter(root.right)
  // 在右子树
  if (k <= count) {
    getInorder(root.right, ans)
    return ans[ans.length - k]
  } else if (k === count + 1) {
    return root.val
  }
  // 在左子树
  getInorder(root.left, ans)
  return ans[ans.length - k + count + 1]
}
