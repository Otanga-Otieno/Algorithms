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

