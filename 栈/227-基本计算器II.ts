function calculate(s: string): number {
  const clone = s.split(' ').join('').split('')
  const numStack: number[] = []
  let num = 0, op = '+'
  clone.forEach((c, i) => {
    if (!isNaN(Number(c))) {
      // 数字
      num = num * 10 + Number(c)
      if (i !== clone.length - 1) return
    }
    if (isNaN(Number(c)) || i === clone.length - 1) {
      // 操作符
      switch (op) {
        case '+':
          numStack.push(num)
          break
        case '-':
          numStack.push(-num)
          break
        case '*':
          numStack.push(numStack.pop() * num)
          break
        case '/':
          numStack.push(numStack.pop() / num | 0)
      }
      op = c
      num = 0
    }
  })
  
  return numStack.reduce((pre, cur) => pre + cur, 0)
}
