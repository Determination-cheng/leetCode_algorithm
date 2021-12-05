function multiply(num1: string, num2: string): string {
    if (num1 === '0' || num2 === '0') return '0'
    const res = new Array(num1.length + num2.length).fill(0)
    let sum = 0
    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            sum = res[i + j + 1] + (+num1[i]) * (+num2[j])
            res[i + j + 1] = sum % 10
            res[i + j] += Math.floor(sum / 10)
        }
    }
    if (res[0] === 0) res.shift()
    return res.join('')
}

export {}
