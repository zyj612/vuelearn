import { parsePath } from "./function.js"

  export default class Watcher {
    constructor (vm, expOrFn, cb) {
      this.vm = vm
      // 执行this.getter()，就可以读取data.a.b.c的内容
      this.getter = parsePath(expOrFn)
      this.cb = cb
      this.value = this.get()
    }
  
    get() {
      global.target = this
      let value = this.getter.call(this.vm, this.vm)
      global.target = undefined
      return value
    }
  
    update () {
      const oldValue = this.value
      this.value = this.get()
      this.cb.call(this.vm, this.value, oldValue)
    }
  }