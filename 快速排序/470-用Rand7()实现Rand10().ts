// @ts-nocheck

function rand10(): number {
  let num = 0
  while (true) {
    num = (rand7() - 1) * 7 + rand7() // rand49() [1-40] [41-49]
    if (num <= 40) return (num % 10) + 1
    // 此时 num - 40 代表rand9()
    num = (num - 40 - 1) * 7 + rand7()  // rand63() [1-60] [61-63]
    if (num <= 60) return (num % 10) + 1
    // 此时 num - 60 代表rand3()
    num = (num - 60 - 1) * 7 + rand7()  // rand21() [1-20] [21]
    if (num <= 20) return (num % 10) + 1
  }
}
