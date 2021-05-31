var Heap = /** @class */ (function () {
    function Heap(arr, kind) {
        this.kind = kind === 'big';
        this.heap = arr;
        this.init();
    }
    Heap.prototype.init = function () {
        for (var i = 1; i < this.heap.length; i++)
            this.softUp(i);
    };
    Heap.prototype.size = function () {
        return this.heap.length;
    };
    Heap.prototype.peek = function () {
        return this.size() ? this.heap[0] : null;
    };
    Heap.prototype.push = function (n) {
        this.heap.push(n);
        this.softUp(this.heap.length - 1);
    };
    Heap.prototype.pop = function () {
        var res = this.size() ? this.heap[0] : null;
        this.heap[0] = this.heap.pop();
        this.softDown(0);
        return res;
    };
    Heap.prototype.softUp = function (index) {
        var parentIndex;
        while (index > 0) {
            parentIndex = (index - 1) >> 1;
            if (this.kind) {
                // 大顶堆
                if (this.heap[parentIndex] < this.heap[index])
                    this.swap(index, parentIndex);
            }
            else {
                // 小顶堆
                if (this.heap[parentIndex] > this.heap[index])
                    this.swap(index, parentIndex);
            }
            index = parentIndex;
        }
    };
    Heap.prototype.softDown = function (index) {
        var leftIndex, rightIndex, target = index;
        while (index < this.heap.length - 1) {
            leftIndex = (index << 1) + 1;
            rightIndex = (index << 1) + 2;
            if (this.kind) {
                // 大顶堆
                if (leftIndex < this.heap.length && this.heap[leftIndex] > this.heap[target]) {
                    target = leftIndex;
                }
                if (rightIndex < this.heap.length && this.heap[rightIndex] > this.heap[target]) {
                    target = rightIndex;
                }
            }
            else {
                // 小顶堆
                if (leftIndex < this.heap.length && this.heap[leftIndex] < this.heap[target]) {
                    target = leftIndex;
                }
                if (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[target]) {
                    target = rightIndex;
                }
            }
            if (target === index)
                break;
            this.swap(target, index);
            index = target;
        }
    };
    Heap.prototype.swap = function (i, j) {
        var _a;
        _a = [this.heap[j], this.heap[i]], this.heap[i] = _a[0], this.heap[j] = _a[1];
    };
    return Heap;
}());
var arr = [0, 1, 0, 2, 1, 4, 5, 4, 3, 4, 1, 1, 6, 3, 14, 13, 8, 2, 2, 13, 0, 6, 18, 3, 1, 8, 8, 5, 9, 5, 28, 21, 8, 17, 5, 16, 9, 37, 37, 30, 33, 14, 22, 37, 7, 27, 29, 22, 38, 41, 36, 43, 29, 45, 49, 8, 9, 20, 42, 19, 60, 56, 19, 32, 44, 16, 28, 8, 59, 55, 68, 52, 31, 49, 28, 52, 33, 8, 33, 38, 69, 47, 59, 61, 6, 64, 79, 59, 78, 28, 27, 39, 43, 14, 40, 57, 96, 81, 38, 94];
var expect = [0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 7, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 13, 13, 14, 14, 14, 16, 16, 17, 18, 19, 19, 20, 21, 22, 22, 27, 27, 28, 28, 28, 28, 29, 29, 30, 31, 32, 33, 33, 33, 36, 37, 37, 37, 38, 38, 38, 39, 40, 41, 42, 43, 43, 44];
function getLeastNumbers(arr, k) {
    var smallHeap = new Heap(arr, 'small');
    var res = [];
    for (var i = 0; i < k; i++) {
        res.push(smallHeap.pop());
    }
    return res;
}
console.log(getLeastNumbers(arr, 78));
