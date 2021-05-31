class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

//* 1.通过递归的方式
// function postorderTraversal(root: TreeNode | null): number[] {
//   if (!root) return []
//   let node
//   const res = [], stack = [root]
//   while (stack.length) {
//     node = stack.pop()
//     res.unshift(node.val)
//     if (node.left) stack.push(node.left)
//     if (node.right) stack.push(node.right)
//   }
//   return res
// }

//* 2.通过栈的方式
function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return []
  const ans: number[] = []
  //* 1:压入栈顶节点的左子节点  2:压入栈顶节点的右子节点  0:输出对应节点的值
  const nodeStack: TreeNode[] = [root], actionStack: Array<0 | 1 | 2> = [0]
  let action = 0, node = root
  while (nodeStack.length) {
    action = actionStack.pop()
    node = nodeStack[nodeStack.length - 1]
    switch (action) {
      case 0:
        actionStack.push(1)
        if (node.left) {
          nodeStack.push(node.left)
          actionStack.push(0)
        }
        break
      case 1:
        actionStack.push(2)
        if (node.right) {
          nodeStack.push(node.right)
          actionStack.push(0)
        }
        break
      case 2:
        ans.push(nodeStack.pop().val)
    }
  }
  return ans
}
