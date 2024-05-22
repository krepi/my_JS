const SinglyLinkedList = require('./lists/SinglyLinkedList');

class Queue {
    constructor() {
        this.data = new SinglyLinkedList();
    }

    /**
     * Add an element to the end of the queue
     * @param {*} val - The value to be added
     * @return {Queue} - The queue instance
     */
    enqueue(val) {
        this.data.push(val);
        return this;
    }

    /**
     * Remove and return the element from the front of the queue
     * @return {undefined|*} - The removed element or undefined if the queue is empty
     */
    dequeue() {

        const node = this.data.shift();
        return node.val;
    }

    /**
     * Get the element at the front of the queue without removing it
     * @return {undefined|*} - The element at the front of the queue or undefined if the queue is empty
     */
    peek() {
        return this.data.head ? this.data.head.val : undefined;
    }

    /**
     * Check if the queue is empty
     * @return {boolean} - True if the queue is empty, false otherwise
     */
    isEmpty() {
        return this.data.length === 0;
    }
}

module.exports = Queue;