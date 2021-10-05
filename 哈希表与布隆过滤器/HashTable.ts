class Node<T> {
    val: T
    next: Node<T> | null
    constructor(val: T) {
        this.val = val
        this.next = null
    }

    //* 在当前节点后面插入一个节点
    insert(node: Node<T>) {
        node.next = this.next
        this.next = node
    }
}

class HashTable<T> {
    cnt: number
    data: Array<Node<T> | null>
    constructor(n: number) {
        this.data = (new Array(n) as any).fill(null)
        this.cnt = 0
    }

    insert(s: T) {
        let ind = this.hash_func(s) % this.data.length
        const node = new Node(s)
        this.cnt++
        if (!this.data[ind]) {
            this.data[ind] = node
            return
        }
        let p = this.data[ind] as Node<T>
        while (p.next && p.next.val !== s) p = p.next
        if (p.next === null) {  // 走到最后还没找到
            p.insert(node)
            if (this.cnt > this.data.length * 3) this.expand()
        }
    }

    find (s: T) {
        const ind = this.hash_func(s) % this.data.length
        let p = this.data[ind]
        while (p && p.val !== s) p = p.next
        return p !== null
    }

    private expand() {
        //* 开辟新的哈希表
        const n = this.data.length * 2
        const h = new HashTable<T>(n)
        //* 数据迁移
        let p: Node<T> | null
        this.data.forEach(d => {
            p = d
            while (p) {
                h.insert(p.val)
                p = p.next
            }
        })
        this.data = h.data
    }

    //* 计算哈希值
    private hash_func(s: T): number {
        let str = JSON.stringify(s), hash: number = 0, seed = 131
        for (let i = 0; i < str.length; i++) {
            hash = hash * seed + str[i].charCodeAt(0)
        }
        return hash & 0x7fffffff
    }
}

//* 测试
const h = new HashTable<string>(5) // string -> number
h.insert('aaa')
h.insert('bbb')
h.insert('ccc')
h.insert('ddd')
h.insert('eee')
h.insert('fff')
h.insert('ggg')
console.log(h.data)
console.log(h.find('ggg'))

export {}
