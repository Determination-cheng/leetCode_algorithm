function removeOuterParentheses(S: string): string {
  let diff = 0, res = ''
  
  for (let c of S) {
    if (c === '(' && diff++ > 0) res += c
    else if (c === ')' && diff-- > 1) res += c
  }
  
  return res
}
