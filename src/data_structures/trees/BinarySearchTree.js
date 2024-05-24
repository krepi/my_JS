const Queue = require('../Queue');

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertIterative(value) {
        if (!this.root) {
            this.root = new Node(value);
            return true;
        }
        let current = this.root;

        while (true) {
            if (value === current.value) {
                return false;
            }
            if (value > current.value) {
                if (!current.right) {
                    current.right = new Node(value);
                    return true;
                } else {
                    current = current.right;
                }
            } else {
                if (!current.left) {
                    current.left = new Node(value);
                    return true;
                } else {
                    current = current.left;
                }
            }
        }

    }

    insert(value) {
        if (!this.root) {
            this.root = new Node(value);
            return true;
        }
        return this._insert(this.root, value);
    }

    _insert(node, value) {
        if (value === node.value) {
            return false;
        }
        if (value > node.value) {
            if (!node.right) {
                node.right = new Node(value);
                return true;
            } else {
                return this._insert(node.right, value)
            }
        } else {
            if (!node.left) {
                node.left = new Node(value);
                return true;
            } else {
                return this._insert(node.left, value)
            }
        }
    }

    /**
     *
     * @param value
     * @return {boolean}
     */
    findIterative(value) {
        if (!this.root) {
            return false;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    /**
     *
     * @param value
     * @return {boolean|*}
     */
    find(value) {
        if (!this.root) {
            return false;
        }
        return this._find(this.root, value);
    }

    /**
     *
     * @param node
     * @param value
     * @return {boolean|*}
     * @private
     */
    _find(node, value) {
        if (value === node.value) {
            return true;
        }
        if (value > node.value) {
            if (!node.right) {
                return false;
            } else {
                return this._find(node.right, value)
            }
        } else {
            if (!node.left) {
                return false;
            } else {
                return this._find(node.left, value)
            }
        }
    }

    BFS() {
        const queue = new Queue();
        const data = [];
        let node = this.root;
        if (!node) return data;

        queue.enqueue(node);

        while (!queue.isEmpty()) {
            node = queue.dequeue();
            data.push(node.value);
            if (node.left) queue.enqueue(node.left);
            if (node.right) queue.enqueue(node.right);
        }

        return data;
    }

    /**
     *
     * @return {*|*[]}
     */
    recBFS() {
        const queue = new Queue();
        const data = [];
        let node = this.root;
        if (!node) return data;
        queue.enqueue(node)  ;
        return this._BFS(queue, data)
    }

    /**
     *
     * @param queue
     * @param data
     * @return {*}
     * @private
     */
    _BFS(queue,data){
        if(queue.isEmpty()) return data;

       const node = queue.dequeue();
        data.push(node.value);
        if (node.left) queue.enqueue(node.left);
        if (node.right) queue.enqueue(node.right);

        return this._BFS(queue, data);

    }
    PreOrder(){
        const data= [];
        let current = this.root
        return this._PreOrder(current,data);
    }
    _PreOrder(node, data){
        data.push(node.value);
        if(node.left) this._PreOrder(node.left, data);
        if(node.right) this._PreOrder(node.right, data);
        return data;
    }

    DFSPreOrder(){
        const data = [];
        function traverse (node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
    DFSPostOrder(){
        const data = [];
        function traverse (node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }
    DFSInOrder(){
        const data = [];
        function traverse (node){
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);

        }
        traverse(this.root);
        return data;
    }
}

const bst = new BinarySearchTree();
console.log(bst.insert(10)); // true
console.log(bst.insert(5));  // true
console.log(bst.insert(15)); // true
console.log(bst.insert(2));  // true
console.log(bst.insert(7));  // true
console.log(bst.insert(12)); // true
console.log(bst.insert(20)); // true
console.log(bst.insert(10)); // false - duplicate ignored
console.log(bst.find(7));  // true
console.log(bst.find(3));  // false
console.log(bst.find(10)); // true
console.log(bst.find(25)); // false
console.log("BST: ", JSON.stringify(bst.root, null, 2));
console.log("dfs ", bst.PreOrder())
console.log("dfs pre stacked ", bst.DFSPreOrder())
console.log("dfs post stacked ", bst.DFSPostOrder())
console.log("dfs in stacked ", bst.DFSInOrder())

