function duplicate(s: string, n: number) {
  if (!n) return s
  let res = s
  for (let i = 1; i < n; i++) res += s
  return res
}
function decodeString(s: string): string {
  // 0:数字  1:[  2:待操作字符
  let c = '', num = '', str = ''
  const actionStack: Array<0 | 1 | 2> = [], stack: string[] = []
  for (let i = 0; i < s.length; i++) {
    c = s[i]
    // 数字
    if (c <= '9' && c >= '0') {
      actionStack.push(0)
      stack.push(c)
    } else if (c === '[') {
      actionStack.push(1)
    } else if (c === ']') {
      // 拿到要操作的字符串
      while (actionStack.length && actionStack[actionStack.length - 1] !== 1) {
        str = stack.pop() + str
        actionStack.pop()
      }
      // 丢掉 [
      actionStack.pop()
      // 拿到要重复的次数
      while (actionStack.length && actionStack[actionStack.length - 1] === 0) {
        num = stack.pop() + num
        actionStack.pop()
      }
      // 处理字符串
      stack.push(duplicate(str, Number(num)))
      actionStack.push(2)
      // 重置
      str = ''
      num = ''
    } else {
      // 普通字符
      actionStack.push(2)
      stack.push(c)
    }
  }
  return stack.join('')
}
