class N<T> {
    val: T | undefined
    next: N<T> | null
    constructor(val?: T) {
        this.val = val
        this.next = null
    }

    insert(node: N<T>) {
        node.next = this.next
        this.next = node
    }
}

class MyHashSet {
    data: Array<N<number>>
    cnt: number
    constructor(n?: number) {
        const num = n || 100
        this.data = new Array(num).fill(0).map(_ => new N())
        this.cnt = 0
    }

    add(key: number): void {
        const ind = this.hashFn(key)
        const node = new N(key)
        let p = this.data[ind]
        while (p.next && p.next.val !== key) p = p.next
        if (p.next === null) { // 重复的就不添加了
            p.insert(node)
            this.cnt++
            if (this.cnt > this.data.length * 2) this.expand()
        }
    }

    remove(key: number): void {
        const ind = this.hashFn(key)
        let p = this.data[ind]
        while (p.next && p.next.val !== key) p = p.next
        if (p.next?.val === key) {
            const q = p.next
            p.next = q.next
            q.next = null
            this.cnt--
        }
    }

    contains(key: number): boolean {
        const ind = this.hashFn(key)
        let p = this.data[ind]
        while (p.next && p.next.val !== key) p = p.next
        return p.next?.val === key
    }

    private hashFn(key: number) {
        const str = key.toString(), seed = 131
        let hash = 0
        for (let i = 0; i < str.length; i++) {
            hash = hash * seed + str[i].charCodeAt(0)
        }
        return hash % this.data.length
    }

    private expand() {
        const n = this.data.length * 2
        const h = new MyHashSet(n)
        this.data.forEach(d => {
            while (d) {
                if (d.val !== undefined) h.add(d.val)
                if (d.next) d = d.next
                else break
            }
        })
        this.data = h.data
    }
}

export {}
