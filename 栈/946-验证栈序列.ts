function validateStackSequences(pushed: number[], popped: number[]): boolean {
  if (pushed.length !== popped.length) return false
  
  const stack = []
  for (let item of popped) {
    if (stack.length && stack[stack.length - 1] === item) {
      stack.pop()
      continue
    }
    
    while (stack[stack.length - 1] !== item) {
      if (!pushed.length) return false
      stack.push(pushed.shift())
    }
    stack.pop()
  }
  return !stack.length
}
