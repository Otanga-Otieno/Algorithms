class Stack {

    constructor() {
        this.arr = new Array();
    }

    push(item) {
        let n = this.arr.length;
        let arrcopy = new Array();
        for(let i=0; i<n; i++) {
            arrcopy[i] = this.arr[i];
        }
        arrcopy[n] = item;
        this.arr = arrcopy;
        arrcopy = undefined;
    }

    pop() {
        let n = this.arr.length;
        if(n === 0) return "Underflow";
        let arrcopy = new Array(n-1);
        for(let i=0; i<n-1; i++) {
            arrcopy[i] = this.arr[i];
        }
        this.arr = arrcopy;
        arrcopy = undefined;
    }

    print() {
        let st = "";
        for(let i=this.arr.length-1; i>=0; i--) {
            st += this.arr[i] + " \n";
        }
        //return this.arr;
        return st;
    }

    peek() {
        return this.arr[this.arr.length-1];
    }

    isEmpty() {
        return this.arr.length == 0;
    }
}

