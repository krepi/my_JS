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

    /**
     *
     * @param index
     * @return {*|null}
     */
    get(index) {
        if (!this.head || index < 0 || index >= this.length) return null
        let counter;
        let indexed;
        if (index <= this.length / 2) {
            counter = 0;
            indexed = this.head;
            while (counter !== index) {
                indexed = indexed.next;
                counter++;
            }
        } else {
            counter = this.length - 1;
            indexed = this.tail
            while (counter !== index) {
                indexed = indexed.prev;
                counter--;
            }
        }
        return indexed;
    }

    getImproved(index) {
        if (index < 0 || index >= this.length) return null;

        let current = this.head;
        let direction = "next";


        if (index > (this.length - 1) / 2) {
            current = this.tail;
            direction = "prev";
            index = this.length - 1 - index;
        }

        for (let i = 0; i < index; i++) {
            current = current[direction]
        }

        return current;
    }

    /**
     *
     * @param index
     * @param value
     * @return {boolean}
     */
    set(index, value) {
        const toSet = this.get(index);
        if (toSet) {
            toSet.val = value;
            return true;
        }
        return false;
    }

    /**
     *
     * @param index
     * @param value
     * @return {boolean}
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        const newNode = new Node(value);
        const prevNode = this.get(index - 1);
        const nextNode = prevNode.next
        if (prevNode) {
            newNode.next = nextNode;
            newNode.prev = prevNode;
            nextNode.prev = newNode;
            prevNode.next = newNode;
            this.length++;
            return true;
        }

        return false;
    }

    /**
     *
     * @param index
     * @return {undefined|*|null}
     */
    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();

        const removedNode = this.get(index);
        if (removedNode) {
            const prevNode = removedNode.prev;
            const nextNode = removedNode.next

            prevNode.next = nextNode;
            nextNode.prev = prevNode;
            removedNode.next = null;
            removedNode.prev = null;

            this.length--;

            return removedNode;
        }
        return undefined;
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

module.exports = DoublyLinkedList;