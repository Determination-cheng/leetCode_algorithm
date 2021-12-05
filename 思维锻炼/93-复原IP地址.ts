function restoreIpAddresses(s: string): string[] {
    const res: string[] = []
    dfs([], 0, s, res)
    return res
}

function dfs(temp: string[], ind: number, s: string, res: string[]) {
    if (temp.length === 4 && ind >= s.length) {
        res.push(temp.join('.'))
        return
    }
    if (temp.length === 4 && ind < s.length) {
        return
    }

    for (let i = 0; i < 3; i++) {
        if (ind + i >= s.length) return
        if (i > 0 && s[ind] === '0') return
        const ip = s.slice(ind, ind + i + 1)
        if (+ip > 255) return
        temp.push(ip)
        dfs(temp, ind + i + 1, s, res)
        temp.pop()
    }
}

export {}
