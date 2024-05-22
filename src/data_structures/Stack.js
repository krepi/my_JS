const SinglyLinkedList = require('./lists/SinglyLinkedList');

class Stack {
    constructor() {
        this.data = new SinglyLinkedList();
    }

    /**
     * Push a value onto the stack
     * @param {*} val - The value to be pushed
     * @return {number} - The new length of the stack
     */
    push(val) {
        this.data.unshift(val);
        return this.data.length;
    }

    /**
     * Pop a value off the stack
     * @return {undefined|*} - The removed element or undefined if the stack is empty
     */
    pop() {
        return this.data.shift();
    }

    /**
     * Peek at the top value of the stack
     * @return {undefined|*} - The top element of the stack or undefined if the stack is empty
     */
    peek() {
        return this.data.head ? this.data.head.val : undefined;
    }

    /**
     * Check if the stack is empty
     * @return {boolean} - True if the stack is empty, false otherwise
     */
    isEmpty() {
        return !this.data.head;
    }
}

class MinMaxStack {
    constructor() {
        this.stack = new Stack();
        this.minStack = new Stack();
        this.maxStack = new Stack();
    }

    /**
     * Push a value onto the stack and update min/max stacks
     * @param {*} val - The value to be pushed
     * @return {number} - The new length of the stack
     */
    push(val) {
        const length = this.stack.push(val);

        if (this.minStack.isEmpty() || val <= this.minStack.peek()) {
            this.minStack.push(val);
        }

        if (this.maxStack.isEmpty() || val >= this.maxStack.peek()) {
            this.maxStack.push(val);
        }

        return length;
    }

    /**
     * Pop a value off the stack and update min/max stacks
     * @return {undefined|*} - The removed element or undefined if the stack is empty
     */
    pop() {
        const val = this.stack.pop();

        if (val === this.minStack.peek()) {
            this.minStack.pop();
        }

        if (val === this.maxStack.peek()) {
            this.maxStack.pop();
        }

        return val;
    }

    /**
     * Peek at the top value of the stack
     * @return {undefined|*} - The top element of the stack or undefined if the stack is empty
     */
    peek() {
        return this.stack.peek();
    }

    /**
     * Get the minimum value in the stack
     * @return {undefined|*} - The minimum value or undefined if the stack is empty
     */
    getMin() {
        return this.minStack.peek();
    }

    /**
     * Get the maximum value in the stack
     * @return {undefined|*} - The maximum value or undefined if the stack is empty
     */
    getMax() {
        return this.maxStack.peek();
    }

    /**
     * Check if the stack is empty
     * @return {boolean} - True if the stack is empty, false otherwise
     */
    isEmpty() {
        return this.stack.isEmpty();
    }
}

module.exports = {Stack, MinMaxStack};
