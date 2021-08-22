//@ts-nocheck
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null
  if (root === p || root === q) return root
  const lTree = lowestCommonAncestor(root.left, p, q), rTree = lowestCommonAncestor(root.right, p, q)
  if (lTree && rTree) return root
  if (!rTree && lTree) return lTree
  return rTree
}
