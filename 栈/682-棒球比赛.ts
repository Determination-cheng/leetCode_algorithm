function calPoints(ops: string[]): number {
  const points: number[] = []
  ops.forEach(op => {
    switch (op) {
      case '+':
        points.push(points[points.length - 1] + points[points.length - 2])
        break
      case 'D':
        points.push(points[points.length - 1] * 2)
        break
      case 'C':
        points.pop()
        break
      default:
        points.push(Number(op))
    }
  })
  return points.reduce((pre, cur) => pre + cur, 0)
}
