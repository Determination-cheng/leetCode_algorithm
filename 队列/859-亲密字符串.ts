// @ts-nocheck
function buddyStrings(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  if (a === b) {
    // 如果有两个重复字符即为亲密字符串
    const counter: {[key: string]: number} = {}
    for (let c of a) counter[c] = counter[c] ? ++counter[c] : 1
    return Math.max(...Object.values(counter)) > 1
  }
  let a1 = '', b1 = ''
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      a1 = a[i] + a1
      b1 += b[i]
      if (a1.length > 2) return false
    }
  }
  return a1.length === 2 && a1 === b1
}
