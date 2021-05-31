// @ts-nocheck
class Node {
  val: number
  next: Node | null
  random: Node | null
  constructor(val?: number, next?: Node | null, random?: Node) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
    this.random = random === undefined ? null : random
  }
}

function copyRandomList(head: Node | null): Node | null {
  if(!head) return null
  let p = head, clone, q
  //* 克隆
  while (p) {
    clone = new Node(p.val, p.next, p.random)
    p.next = clone
    p = clone.next
  }
  clone = head.next
  //* 修正克隆节点的 random，使克隆点指向克隆点
  q = clone
  while (q) {
    if (q.random) q.random = q.random.next
    q = q.next?.next
  }
  //* 分隔链表
  p = head
  while (p) {
    q = p.next
    p.next = q.next
    if (p.next) q.next = p.next.next
    p = p.next
  }
  return clone
};
