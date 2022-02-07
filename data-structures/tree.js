class Node {

    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}


class BinarySearchTree {

    constructor() {
        this.root = null;
        this.size = 0;
    }

    add(value) {
        let node = new Node(value);

        if(this.size == 0) {
            this.root = node;
            this.size++;
        } else {
            this.addNode(this.root, node);
        }
    }

    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    addNode(node, newNode) {

        if(newNode.value < node.value) {
            if(node.left == null) {
                node.left = newNode;
                this.size++;
            } else {
                this.addNode(node.left, newNode);
            }
        } else {
            if(node.right == null) {
                node.right = newNode;
                this.size++;
            } else {
                this.addNode(node.right, newNode);
            }
        }

    }

    removeNode(node, value) {

        if(node === null) {
            return null;
        } else if(value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if(value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {

            if(node.left === null && node.right === null) {
                node = null;
                return node;
            } else if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            } else {
                let swap = this.minNode(node.right);
                node.value = swap.value;
                node.right = this.removeNode(node.right, swap.value);
                return node;

            }

        }

    }

    search(value, node = this.root) {
        if(node.value === value) {
            return true;
        } else {
            if(value < node.value) {
                return node.left ? this.search(value, node.left) : false;
            } else {
                return node.right ? this.search(value, node.right) : false;
            }
        }
    }

    minNode(node) {
        return (node.left === null) ? node : this.minNode(node.left);
    }

    print(node) {
        if(node) {
            this.print(node.left);
            console.log(node.value);
            this.print(node.right);
        }
    }

    printTree() {
        this.print(this.root);
    }

}

