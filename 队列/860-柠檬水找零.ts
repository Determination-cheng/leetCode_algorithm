function lemonadeChange(bills: number[]): boolean {
  let five = 0, ten = 0
  for (let bill of bills) {
    //* 找钱
    if (bill === 5) {
      five++
      continue
    }
    if (bill === 10) {
      ten++
      five--
    }
    if (bill === 20) {
      if (ten) {
        five--
        ten--
      } else {
        five -= 3
      }
    }
    //* 判断是否没零钱
    if (five < 0) return false
  }
  return true
}
