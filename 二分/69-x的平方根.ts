function mySqrt(x: number): number {
    let h = 0, t = x, mid: number
    while (h < t) {
        mid = ((h + t) >> 1) + 1
        if (mid ** 2 <= x) h = mid
        else t = mid - 1
    }
    return h
}

export {}
