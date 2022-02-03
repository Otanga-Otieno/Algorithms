class Queue {

    constructor() {
        this.arr = new Array();
    }

    enqueue(item) {
        this.arr[this.arr.length] = item;
    }

    dequeue() {
        if(this.isEmpty()) return "Underflow";
        let n = this.arr.length;
        let arrcopy = new Array();
        for(let i=1; i<n; i++) {
            arrcopy[i-1] = this.arr[i];
        }
        this.arr = arrcopy;
        arrcopy = undefined;
    }

    print() {
        let st = "";
        for(let i=0; i<this.arr.length; i++) {
            st += this.arr[i] + "\n";
        }
        return st;
    }

    front() {
        if(this.isEmpty()) return "Queue is empty";
        return this.arr[0];
    }

    isEmpty() {
        return this.arr.length == 0;
    }

}

