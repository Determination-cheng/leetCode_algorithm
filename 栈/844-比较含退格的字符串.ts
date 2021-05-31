function backspaceCompare(s: string, t: string): boolean {
  const SStack: string[] = []
  const TStack: string[] = []
  
  for (let c of s) {
    if (c === '#') SStack.length && SStack.pop()
    else SStack.push(c)
  }
  for (let c of t) {
    if (c === '#') TStack.length && TStack.pop()
    else TStack.push(c)
  }
  
  return SStack.join('') === TStack.join('')
}
