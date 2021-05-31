// @ts-nocheck
function isValid(s: string): boolean {
  const bracketStack: string[] = []
  const bracketMap = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  
  for (let c of s) {
    //* 左括号
    if (Object.values(bracketMap).indexOf(c) !== -1) {
      bracketStack.push(c)
      continue
    }
    //* 右括号
    if (bracketStack[bracketStack.length - 1] === bracketMap[c]) {
      bracketStack.pop()
    } else {
      return false
    }
  }
  
  return !bracketStack.length
}
