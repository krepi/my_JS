class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;

    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    /**
     * add new element at the end of the list, and set it as a tail
     * @param value
     * @return {DoublyLinkedList}
     */
    push(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++;
        return this;
    }

    /**
     * remove last element from the list, set previous element as a new list tail
     * @return {undefined|null}
     */
    pop() {
        if (!this.head) return undefined;
        const popped = this.tail;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null;
        }

        this.length--;
        return popped;

    }

    /**
     *
     * @return {undefined|*}
     */
    shift() {
        if (!this.head) return undefined;

        let shifted = this.head;
        if (this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = shifted.next;
            this.head.prev = null;
            shifted.next = null;
        }
        this.length--;

        return shifted
    }

    /**
     *
     * @param value
     * @return {DoublyLinkedList}
     */
    unshift(value) {

        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    printList() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(this.head)
        console.log(this.tail)
        console.log(arr);
    }
}

const list = new DoublyLinkedList()

list.push("hi");

list.push("there")

list.push("there are")
list.printList()
list.pop()
list.printList()