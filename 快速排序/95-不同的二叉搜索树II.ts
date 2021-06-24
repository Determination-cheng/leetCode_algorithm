// @ts-nocheck
function getTrees(l: number, r: number) {
  if (l > r) return [null]
  const ans: Array<TreeNode | null> = []
  let leftTrees: Array<TreeNode | null>, rightTrees: Array<TreeNode | null>
  // 找到每一种情况的左子树和右子树
  for (let i = l; i <= r; i++) {
    leftTrees = getTrees(l, i - 1)
    rightTrees = getTrees(i + 1, r)
    // 对左右子树进行排列组合
    leftTrees.forEach(leftTree => {
      rightTrees.forEach(rightTree => {
        ans.push(new TreeNode(i, leftTree, rightTree))
      })
    })
  }
  return ans
}
function generateTrees(n: number): Array<TreeNode | null> {
  if (!n) return []
  return getTrees(1, n)
}
