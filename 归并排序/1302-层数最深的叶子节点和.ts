//@ts-nocheck
type stateType = [val: number, depth: number]
function counter(root: TreeNode | null, depth: number, curState: stateType) {
  if (!root) return curState
  if (depth === curState[1]) {
    curState[0] += root.val
  } else if (depth > curState[1]) {
    curState[0] = root.val
    curState[1] = depth
  }
  
  counter(root.left, depth + 1, curState)
  counter(root.right, depth + 1, curState)
}

function deepestLeavesSum(root: TreeNode | null): number {
  if (!root) return 0
  const curState: stateType = [root.val, 0]
  counter(root, 0, curState)
  return curState[0]
}
