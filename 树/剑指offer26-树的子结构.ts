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

function isMatch(A: TreeNode | null, B: TreeNode | null) {
  if (!B) return true
  if (!A) return false
  if (A.val !== B.val) return false
  return isMatch(A.left, B.left) && isMatch(A.right, B.right)
}
function isSubStructure(A: TreeNode | null, B: TreeNode | null): boolean {
  if (!A) return false
  if (!B) return false
  if (A.val === B.val && isMatch(A, B)) return true
  return isSubStructure(A.left, B) || isSubStructure(A.right, B)
}
