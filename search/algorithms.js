//1. Linear Search
function linearSearch(arr, item) {

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === item) return i;
    }
    return -1;
}


//2. Binary Search
function binarySearch(arr, item) {

    let l = arr.length;
    let half = parseInt(Math.floor(l/2));
    let n = Math.ceil(half/2);
    let loops = 0;

    while(true) {
        
        if(arr[half] === item) {
            return half;
        } else if(arr[half] > item) {
            half = parseInt(half - n);
        } else {
            half = parseInt(half + n);
        }
        loops++;
        n = (n != 1) ? Math.floor(n/2) : 1;


        if(loops >= l) return -1;
    }

}



//let arr = [1,2];
let arr = [4, 7, 11, 14, 19, 24, 36, 39, 44, 48];


let index = binarySearch(arr, 48);
console.log(index);