class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null
  const bigHead = new ListNode(), smallHead = new ListNode()
  let bigPointer = bigHead, smallPointer = smallHead
  //* 遍历原链表
  for (let p = head, q = head.next; p; p = q) {
    q = p.next
    if (p.val < x) {
      smallPointer.next = p
      smallPointer = smallPointer.next
    } else {
      bigPointer.next = p
      bigPointer = bigPointer.next
      bigPointer.next = null
    }
  }
  //* 拼接链表
  smallPointer.next = bigHead.next
  return smallHead.next
};
