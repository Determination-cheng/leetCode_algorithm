function ch(x: number) {
    x %= 62
    if (x < 26) return String.fromCharCode(x + 'a'.charCodeAt(0))
    if (x < 52) return String.fromCharCode(x - 26 + 'A'.charCodeAt(65));
    return String.fromCharCode(x - 52 + '0'.charCodeAt(0))
}
function genRandString() {
    let s = ''
    for (let i = 0; i < 5; i++) s += ch(Math.floor(Math.random() * 1000))
    return s
}
const dataMap = new Map<string, string>()

/**
 * Encodes a URL to a shortened URL.
 */
function encode(longUrl: string): string {
    let hashUrl = genRandString()
    // 去重
    while (dataMap.has(hashUrl)) hashUrl = genRandString()
    dataMap.set(hashUrl, longUrl)
    return `http://tinyurl.com/${hashUrl}`
}

/**
 * Decodes a shortened URL to its original URL.
 */
function decode(shortUrl: string): string {
    const key = shortUrl.slice(-5)
    return dataMap.get(key) as string
}

export {}
