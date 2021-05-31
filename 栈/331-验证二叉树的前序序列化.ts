//* 1.通过消#
// function isValidSerialization(preorder: string): boolean {
//   let preorderClone = preorder.split(',')
//   let flag = false
//   while (preorderClone.length > 1) {
//     flag = false
//     for (let i = preorderClone.length - 1; i >= 0; i--) {
//       if (preorderClone[i] !== '#' && preorderClone[i + 1] === '#' && preorderClone[i + 2] === '#') {
//         preorderClone.splice(i, 3, '#')
//         flag = true
//       }
//     }
//     if (!flag) break
//   }
//   return preorderClone.length === 1 && preorderClone[0] === '#'
// }

//* 2.通过记录节点数量
function isValidSerialization(preorder: string): boolean {
  const preorderClone = preorder.split(',')
  const stack = [1]
  for (let c of preorderClone) {
    if (!stack.length) return false
    if (c === '#') {
      stack[stack.length - 1]--
      if (!stack[stack.length - 1]) stack.pop()
    } else {
      stack[stack.length - 1]--
      if (!stack[stack.length - 1]) stack.pop()
      stack.push(2)
    }
  }
  return !stack.length
}
