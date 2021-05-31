function minRemoveToMakeValid(s: string): string {
  const leftStack: number[] = [], rightStack: number[] = [], cloneArr = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') leftStack.push(i)
    else if (s[i] === ')') leftStack.length ? leftStack.pop() : rightStack.push(i)
  }
  const bracketsToBeRemoved = [...leftStack, ...rightStack]
  bracketsToBeRemoved.forEach(i => cloneArr.splice(i, 1, ''))
  return cloneArr.join('')
}
