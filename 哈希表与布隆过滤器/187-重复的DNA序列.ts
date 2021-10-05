function findRepeatedDnaSequences(s: string): string[] {
    const res: string[] = [], dataMap = new Map<string, number>()
    let str = '', val: number | undefined = 0
    for (let start = 0, end = s.length - 10; start <= end; start++) {
        str = s.substr(start, 10), val = dataMap.get(str)
        dataMap.set(str, val ? val + 1 : 1)
    }
    dataMap.forEach((times, s) => {
        if (times > 1) res.push(s)
    })

    return res
}

export {}
