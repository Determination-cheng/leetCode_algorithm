// @ts-nocheck
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

function flatten(head: Node | null): Node | null {
    if (!head) return null
    let p = head, q: Node
    while (p) {
        if (p.child) {
            p.child = flatten(p.child)
            q = p.child
            while (q.next) q = q.next
            q.next = p.next
            p.next = p.child
            p.child.prev = p
            p.child = null
            if (q.next) {
                q.next.prev = q
            }
        }
        p = p.next
    }
    return head
}

export {}
