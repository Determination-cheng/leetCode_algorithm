//* 数组下标代表每个个体
//* 数组值代表老大的位置

//* 1.quick-find 快速查找(合并慢)
//* 将属于同一集合的节点标记为同一颜色
class Union_quick_find {
  private readonly colors: number[]
  constructor(n: number) {
    this.colors = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number) {
    return this.colors[index]
  }
  
  merge(a: number, b: number) {
    const cb = this.colors[b]
    // 遍历所有元素，将属于b集合的元素归于a集合的名下
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i] === cb) this.colors[i] = this.colors[a]
    }
  }
}

//* 2.quick-union 快速合并
//* 将连通关系转换为树形结构，通过递归的方式快速判定
//* 老大通过树的根节点来比较
class Union_quick_union {
  private readonly boss: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number): number {
    if (this.boss[index] === index) return index
    return this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    const aBoss = this.find(a), bBoss = this.find(b)
    if (aBoss === bBoss) return
    //! 这里没有考虑到两颗树的情况，因此在极端情况下查找效率会非常低
    this.boss[aBoss] = bBoss
  }
}

//* 3.weighted-quick-union 加权快速合并
//* 通过权重考虑平均查找次数，对合并过程进行优化
//* 权重以节点数量来衡量
class Union_weighted_quick_union {
  private readonly boss: number[]
  private readonly size: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((val, i) => i)
    this.size = new Array(n).fill(0).map(_ => 1)
  }
  
  find(index: number): number {
    if (index === this.boss[index]) return index
    return this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    // 小弟没有话语权，要合并得找大哥
    const aBoss = this.find(a), bBoss = this.find(b)
    if (aBoss === bBoss) return
    // 小树挂在大树上
    if (this.size[aBoss] < this.size[bBoss]) {
      // a树挂在b树名下
      this.boss[aBoss] = bBoss
      this.size[bBoss] += this.size[aBoss]
    } else {
      // b树挂在a树名下
      this.boss[bBoss] = aBoss
      this.size[aBoss] += this.size[bBoss]
    }
  }
}

//* 4.quick-find-quick-union
//* 带路径压缩的加权平均
class Union_quick_find_quick_union {
  private readonly boss: number[]
  private readonly size: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
    this.size = new Array(n).fill(0).map((v, i) => i)
  }
  
  // 在查找的过程中，将挂载的节点扁平化
  find(index: number): number {
    /*
    * 递归含义：
    *   函数意义：把一颗树上的所有节点都挂在另一棵树的子节点上
    *   边界条件：当前节点为根节点时，不需要递归
    *   递归过程：找到要挂载树的根节点，把当前节点指向为根节点，返回根节点
    * */
    if (this.boss[index] === index) return index
    const root = this.find(this.boss[index])
    // 由于是递归调用，因此可以把这棵树上的所有节点都挂在老大的子节点上
    this.boss[index] = root
    return root
  }
  
  merge(a: number, b: number) {
    const aBoss = this.find(a), bBoss = this.find(b)
    if (aBoss === bBoss) return
    if (this.size[aBoss] < this.size[bBoss]) {
      this.boss[aBoss] = bBoss
      this.size[bBoss] += this.size[aBoss]
    } else {
      this.boss[bBoss] = aBoss
      this.size[bBoss] += this.size[aBoss]
    }
  }
}

//* 5.只有路径压缩的并查集模板
class UnionSet {
  private readonly boss: number[]
  constructor(n: number) {
    this.boss = new Array(n).fill(0).map((v, i) => i)
  }
  
  find(index: number): number {
    return this.boss[index] = this.boss[index] === index ? index : this.find(this.boss[index])
  }
  
  merge(a: number, b: number) {
    // 直接将a树挂载在b树上
    this.boss[this.find(a)] = this.find(b)
  }
}
