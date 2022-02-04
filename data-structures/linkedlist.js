class Node {

    constructor(item) {
        this.item = item;
        this.next = null;
    }

}


class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(item) {
        let node = new Node(item);
        let current;

        if(this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while(current.next) {
                current = current.next;
            }
            current.next = node;
    
        }
        this.size++;
    }

    remove(item) {
        let current = this.head, previous;
        while(current) {
            if(current.item === item) {
                
                if(previous == null) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }

                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    insertAt(item, index) {
        if(index < 0 || index > this.size) return "Invalid index";

        let node = new Node(item);
        let current, previous;

        if(index == 0) {
            node.next = this.head;
            this.head = node;
        } else {
            current = this.head;
            let i = 0;

            while(i < index) {
                previous = current;
                current = previous.next;
                i++;
            }

            node.next = current;
            previous.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        if(index < 0 || index >= this.size) return "Invalid index";

        let current = this.head, previous;
        if(index == 0) {
            this.head = current.next;
        } else {
            let i = 0;
            while(i < index) {
                previous = current;
                current = previous.next;
                i++;
            }
            previous.next = current.next;
        }
        this.size--;
        return current.item;
    }

    search(item) {
        let current = this.head;

        while(current) {
            if(current.item === item) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    print() {
        let current = this.head;
        let st = "";
        while(current) {
            st += current.item + "\n";
            current = current.next;
        }
        return st;
    }

}

