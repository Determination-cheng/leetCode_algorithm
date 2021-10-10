function getNewPwd(pwd: string, l: number, q: string[], h: Map<string, number>) {
    const offset = [-1, 1]
    let newStr = '', cal = 0, temp: Array<string | number> = []
    for (let i = 0; i < pwd.length; i++) {
        for (let j = 0; j < offset.length; j++) {
            cal = parseInt(pwd[i]) + offset[j]
            if (cal > 9) cal = 0
            else if (cal < 0) cal = 9

            temp = pwd.split('')
            temp[i] = cal
            newStr = temp.join('')

            if (h.has(newStr)) continue
            h.set(newStr, l + 1)
            q.push(newStr)
        }
    }
}
function bfs(h: Map<string, number>, target: string): number {
    if (h.has('0000')) return -1
    let cur = ''
    const q = ['0000']
    h.set('0000', 0)
    while (q.length) {
        cur = q.shift() as string
        if (cur === target) return h.get(cur) as number
        getNewPwd(cur, h.get(cur) as number, q, h)
    }
    return -1
}
function openLock(deadends: string[], target: string): number {
    const h = new Map<string, number>()
    deadends.forEach(d => h.set(d, 0))
    return bfs(h, target)
}

export {}
