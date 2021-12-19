class StockSpanner {
    private t = 0
    // 向前找第一个大于当前值的位置 —— 单调递减栈
    private readonly s: Array<[price: number, ind: number]> = [[Infinity, this.t++]]

    private tail() {
        return this.s[this.s.length - 1]
    }

    next(price: number): number {
        while (this.tail()[0] <= price) this.s.pop()
        this.s.push([price, this.t++])
        return this.tail()[1] - this.s[this.s.length - 2][1]
    }
}

export {}
