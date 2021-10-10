function dfs(ind: number, barrelToFill: number[], matchsticks: number[]): boolean {
    if (ind === -1) return true
    for (let i = 0; i < 4; i++) {
        if (barrelToFill[i] < matchsticks[ind]) continue
        if (barrelToFill[i] === matchsticks[ind] || barrelToFill[i] >= matchsticks[ind] + matchsticks[0]) {
            barrelToFill[i] -= matchsticks[ind]
            if (dfs(ind - 1, barrelToFill, matchsticks)) return true
            barrelToFill[i] += matchsticks[ind]
        }
    }
    return false
}
function makesquare(matchsticks: number[]): boolean {
    matchsticks.sort((i, j) => i - j)
    const sum = matchsticks.reduce((pre, cur) => pre + cur, 0)
    if (sum % 4) return false
    const barrelToFill = new Array(4).fill(sum / 4)
    return dfs(matchsticks.length - 1, barrelToFill, matchsticks)
}

export {}
