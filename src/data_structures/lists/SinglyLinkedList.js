class Node {
    constructor(val) {
        this.val = val;
        this.next = null

    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    /**
     * add item at the end of list (new tail)
     * @param val
     * @return {SinglyLinkedList}
     */
    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode;
        }

        this.length++;
        return this;

    }


    /**
     * pops last item from list (tail and sets new tail)
     * @return {undefined|*}
     */
    pop() {
        if (!this.head) return undefined;
        // pointing this same node at begin
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current; // move ffd
            current = newTail.next; // move ffd
        }
        // when current is at last element and newTail is one before
        // set new tail, cuts out last element making next element as a null
        // decrement list length
        this.tail = newTail;
        newTail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    //remove item from begin (remove current head)
    /**
     * remove and return item from begin ( current head), set new head,
     * @return {undefined|*}
     */
    shift() {
        if (!this.head) return undefined
        let removedNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return removedNode;
    }

    /**
     * add new note to begin of the list (set new head)
     * @param val
     * @return {SinglyLinkedList}
     */
    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;

        } else {
            newNode.next = this.head
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    /**
     * retrieve  pointed node of the list
     * @param {number} index of searched node
     * @return {object} node if success or null if fail
     */
    get(index) {
        if (!this.head || index < 0 || index >= this.length) return null
        let counter = 0;
        let indexed = this.head
        while (counter !== index) {
            indexed = indexed.next;
            counter++;
        }
        return indexed;
    }

    /**
     * set value to pointed node of the list
     * @param {number} index
     * @param {*} value
     * @return {boolean} true if value have been set false if not
     */
    set(index, value) {
        let nodeToSet = this.get(index);
        if (nodeToSet) {
            nodeToSet.val = value;
            return true;
        }
        return false;
    }

    /**
     * insert new node with given value to the pointed index on the list
     * @param {number} index index of the new node
     * @param {*} value new node value
     * @return {boolean}
     */
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        if (prevNode) {
            newNode.next = prevNode.next;
            prevNode.next = newNode;
            this.length++;
            return true
        }
        return false;
    }

    /**
     *
     * @param index
     * @return {undefined|*}
     */
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode;
    }

    /**
     * 
     * @return {SinglyLinkedList}
     */
    reverse() {
        let current = this.head;
        let prev = null;
        this.tail = current;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }
    listValuesToArray() {
        const arr= [];
        let current = this.head
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

module.exports = SinglyLinkedList
