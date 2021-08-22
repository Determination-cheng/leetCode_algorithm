//@ts-nocheck
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function median(root: TreeNode | null, ans: number[]) {
  if (!root) return root
  median(root.left, ans)
  ans.push(root.val)
  median(root.right, ans)
}
function getAllElements(root1: TreeNode | null, root2: TreeNode | null): number[] {
  const arr1: number[] = [], arr2: number[] = [], ans: number[] = []
  median(root1, arr1)
  median(root2, arr2)
  let p1 = 0, p2 = 0
  while (p1 < arr1.length || p2 < arr2.length) {
    if (p2 >= arr2.length || (p1 < arr1.length && arr1[p1] < arr2[p2])) {
      ans.push(arr1[p1++])
    } else {
      ans.push(arr2[p2++])
    }
  }
  return ans
}

export {}
