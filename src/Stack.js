class Stack {
    constructor() {
        this.stack = []
        this.length = 0
    }

    push(x) {
        this.stack[this.length] = x
        this.length++
    }
    
    isEmpty() {
        return this.length === 0
    }
    peek() {
        return this.isEmpty() ? null : this.stack[this.length - 1]
    }
    
    pop() {
        if (this.isEmpty()) {
            return null
        }
        this.length--
        return delete this.stack[this.length]
    }
    print() {
        console.log(this.stack)
    }
}
module.exports = Stack