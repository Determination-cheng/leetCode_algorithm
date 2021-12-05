class MaxQueue {
    private q: number[] = []
    private mq: number[] = []

    max_value(): number {
        return this.mq?.[0] ?? -1
    }

    push_back(value: number): void {
        this.q.push(value)
        while (this.mq.length && this.mq[this.mq.length - 1] < value) {
            this.mq.pop()
        }
        this.mq.push(value)
    }

    pop_front(): number {
        if (!this.q.length) return -1
        const ret = this.q.shift()!
        if (this.mq[0] === ret) this.mq.shift()
        return ret
    }
}

export {}
