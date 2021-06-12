export {}

class UnionSet {
  private readonly boss: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number): number {
    return this.boss[index] = this.boss[index] === index ? index : this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    this.boss[this.find(a)] = this.find(b)
  }
}

function equationsPossible(equations: string[]): boolean {
  const alphaBet = 'abcdefghijklmnopqrstuvwxyz'
  const equalSet = new UnionSet(26)
  equations.forEach(e => {
    if (e[1] === '=') {
      equalSet.merge(alphaBet.indexOf(e[0]), alphaBet.indexOf(e[3]))
    }
  })
  
  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '!' && equalSet.find(alphaBet.indexOf(equations[i][0])) === equalSet.find(alphaBet.indexOf(equations[i][3]))) {
      return false
    }
  }
  return true
}
