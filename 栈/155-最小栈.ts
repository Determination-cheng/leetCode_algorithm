class MinStack {
    private readonly stack: number[] = []
    private readonly minStack: number[] = [Infinity]

    push(val: number): void {
        if (val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val)
        }
        this.stack.push(val)
    }

    pop(): void {
        const popVal = this.stack.pop()
        if (popVal === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop()
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
    }
}

export {}
