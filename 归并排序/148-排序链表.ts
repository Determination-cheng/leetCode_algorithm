//@ts-nocheck
function mergeSort(head: ListNode | null, len: number) {
  if (!head || !head.next) return head
  const mid = len >> 1
  let p = head
  for (let i = 1; i < mid; i++) p = p.next
  const temp = p
  p = p.next
  temp.next = null
  const lList = mergeSort(head, mid), rList = mergeSort(p, len - mid)
  // 合并
  const vHead = new ListNode()
  let p1 = lList, p2 = rList
  p = vHead
  while (p1 || p2) {
    if (!p2 || (p1 && p1.val < p2.val)) {
      p.next = p1
      p1 = p1.next
    } else {
      p.next = p2
      p2 = p2.next
    }
    p = p.next
  }
  p.next = null
  return vHead.next
}
function sortList(head: ListNode | null): ListNode | null {
  if (!(head && head.next)) return head
  let len = 0, p = head
  while (p) {
    len++
    p = p.next
  }
  return mergeSort(head, len)
}

export {}
