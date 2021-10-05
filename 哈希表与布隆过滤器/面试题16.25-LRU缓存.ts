class N {
    key: number | null
    val: number | null
    next: N | null
    pre: N | null
    constructor(key: number | null, val: number | null) {
        this.key = key
        this.val = val
        this.next = null
        this.pre = null
    }
    insert(node: N) {
        node.next = this.next
        node.pre = this
        this.next = node
        if (node.next) {
            node.next.pre = node
        }
    }
    remove() {
        if (this.pre) {
            this.pre.next = this.next
        }
        if (this.next) {
            this.next.pre = this.pre
        }
        this.next = null
        this.pre = null
        return this
    }
}

class HashTable {
    max: number
    cnt: number
    data: Map<number, N>
    vh: N
    vt: N
    constructor(max: number) {
        this.max = max
        this.cnt = 0
        this.data = new Map()
        this.vh = new N(null, null)
        this.vt = new N(null, null)
        this.vh.next = this.vt
        this.vt.pre = this.vh
    }

    put(key: number, val: number) {
        //* 以前存在这个数据就更新它的值并移到最后一位
        if (this.data.has(key)) {
            const p = this.data.get(key) as N
            p.val = val
            p.remove()
            this.vt.pre!.insert(p)
            return
        }
        //* 新增数据 先在虚拟尾之前添加结点，再判断是否溢出
        const node = new N(key, val)
        this.vt.pre!.insert(node)
        this.data.set(key, node)
        this.cnt++
        //* 溢出时进行删除操作
        if (this.cnt > this.max && this.vh.next !== this.vt) {
            const removedNode = this.vh.next!.remove()
            this.data.delete(removedNode.key as number)
            this.cnt--
        }
    }

    get(key: number) {
        //* 如果存在数据，则需要把该节点移动到链表的最后一位
        if (this.data.has(key)) {
            const p = this.data.get(key)
            p!.remove()
            this.vt.pre!.insert(p as N)
            return this.data.get(key)!.val as number
        }
        return -1
    }
}

class LRUCache {
    h: HashTable
    constructor(capacity: number) {
        this.h = new HashTable(capacity)
    }

    get(key: number): number {
        return this.h.get(key)
    }

    put(key: number, value: number): void {
        this.h.put(key, value)
    }
}

export {}
