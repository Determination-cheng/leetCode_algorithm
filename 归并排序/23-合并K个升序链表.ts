//@ts-nocheck
type dataType = ListNode | null
class SmallHeap {
  data: dataType[]
  constructor(data: dataType[]) {
    this.data = data
    this.init()
  }
  
  init() {
    for (let i = 0; i < this.data.length; i++) {
      if (!this.data[i]) {
        this.data.splice(i, 1)
        i--
      }
      this.sortUp(i)
    }
  }
  
  push(val: dataType) {
    this.data.push(val)
    this.sortUp(this.data.length - 1)
  }
  
  pop() {
    if (!this.data.length) return null
    let ret: dataType
    if (this.data.length === 1) {
      ret = this.data.pop()
    } else {
      ret = this.data[0]
      this.data[0] = this.data.pop()
      this.sortDown(0)
    }
    if (ret.next) this.push(ret.next)
    return ret
  }
  
  sortUp(index: number) {
    let parentIndex: number
    while (index > 0) {
      parentIndex = (index - 1) >> 1
      if (this.data[index].val < this.data[parentIndex].val) {
        this.swap(index, parentIndex)
      } else {
        return
      }
      index = parentIndex
    }
  }
  
  sortDown(index: number) {
    let target: number, lIndex: number, rIndex: number
    while (index < this.data.length) {
      target = index, lIndex = (index << 1) + 1, rIndex = (index << 1) + 2
      if (lIndex < this.data.length && this.data[lIndex].val < this.data[target].val) {
        target = lIndex
      }
      if (rIndex < this.data.length && this.data[rIndex].val < this.data[target].val) {
        target = rIndex
      }
      if (target === index) return
      this.swap(index, target)
      index = target
    }
  }
  
  swap(a: number, b: number) {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
  
  size() {
    return this.data.length
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const ret = new ListNode(), q = new SmallHeap(lists)
  let p = ret
  
  while (q.size()) {
    p.next = q.pop()
    p = p.next
    p.next = null
  }
  return ret.next
}

export {}
