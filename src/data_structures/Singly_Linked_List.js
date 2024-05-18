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

    pop() {
        let current = this.head;
        let prev = current;
        while (current.next) {
            prev = current;
            current = prev.next;
        }
        if (list.length > 0) {
            this.tail = prev;
            prev.next = null;
            list.length--;
        }
        if (list.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}


let list = new SinglyLinkedList()
list.push("hi");
console.log(list)
list.push("yhere")
list.push("yhere")
list.push("there")
list.push("where")
list.push("qhere")
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.pop();
list.push("hi");
list.push("there")
console.log(list)