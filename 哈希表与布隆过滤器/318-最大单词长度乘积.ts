function markStr(str: string) {
    const a = 'a'.charCodeAt(0)
    let res = 0
    for (let i = 0; i < str.length; i++) {
        res |= 1 << (str[i].charCodeAt(0) - a)
    }
    return res
}

function maxProduct(words: string[]): number {
    let res = 0
    const binaryMarks: number[] = []
    words.forEach(word => binaryMarks.push(markStr(word)))
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!(binaryMarks[i] & binaryMarks[j])) {
                res = Math.max(res, words[i].length * words[j].length)
            }
        }
    }

    return res
}

export {}
