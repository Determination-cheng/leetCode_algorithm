type DataType = number[]

class N {
    val: DataType | undefined
    next: N | null
    constructor(val?: DataType) {
        this.val = val
        this.next = null
    }
    insert(node: N) {
        node.next = this.next
        this.next = node
    }
    update(val: DataType) {
        this.val = val
    }
}

class MyHashMap {
    data: Array<N>
    cnt: number
    constructor(n?: number) {
        const num = n || 100
        this.data = new Array(num).fill(null).map(_ => new N())
        this.cnt = 0
    }

    put(key: number, value: number): void {
        const ind = this.hashFn(key), node = new N([key, value])
        let p = this.data[ind]
        while (p.next && p.next.val![0] !== key) {
            p = p.next
        }
        //* 以前没有，直接在链表后面新增
        if (!p.next) {
            p.insert(node)
            this.cnt++
        } else if (p.next.val![0] === key) {
            //* 以前有的话就更新
            p.next.update([key, value])
        }
        if (this.cnt > this.data.length * 2) this.expand()
    }

    get(key: number): number {
        const ind = this.hashFn(key)
        let p = this.data[ind]
        while (p.next && p.next.val![0] !== key) p = p.next
        if (p.next && p.next.val![0] === key) return p.next.val![1]
        return -1
    }

    remove(key: number): void {
        const ind = this.hashFn(key)
        let p = this.data[ind]
        while (p.next && p.next.val![0] !== key) p = p.next
        if (p.next && p.next.val![0] === key) {
            const q = p.next
            p.next = q.next
            q.next = null
            this.cnt--
        }
    }

    private hashFn(key: number) {
        const s = key.toString(), seed = 131
        let hash = 0
        for (let i = 0; i < s.length; i++) {
            hash = hash * seed + s[i].charCodeAt(0)
        }
        return hash % this.data.length
    }

    private expand() {
        const n = this.data.length * 2
        const h = new MyHashMap(n)
        let p: N | null
        this.data.forEach(d => {
            p = d.next
            while (p) {
                h.put(p.val![0], p.val![1])
                p = p.next
            }
        })
        this.data = h.data
    }
}

export {}
