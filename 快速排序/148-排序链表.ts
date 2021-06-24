function sortList(head: ListNode | null): ListNode | null {
  if (!head) return null
  if (!head.next) return head
  let min = head.val, max = head.val, avg: number
  let p: ListNode | null, h1 = null, h2 = null, q = null
  p = head
  // 找到最大和最小值同时获得其平均值
  while (p) {
    min = Math.min(min, p.val)
    max = Math.max(max, p.val)
    p = p.next
  }
  if (min === max) return head
  avg = (min + max) >> 1
  // 遍历链表，小数接链表1，大数接链表2
  p = head
  while (p) {
    q = p.next
    if (p.val <= avg) {
      p.next = h1
      h1 = p
    } else {
      p.next = h2
      h2 = p
    }
    p = q
  }
  h1 = sortList(h1)
  h2 = sortList(h2)
  // 至此两条链表已是有序链表，接下来使p指针指向链表1的头并连接链表2
  p = h1
  while (p?.next) p = p!.next
  p!.next = h2
  return h1
}
