/*********** SORT ALGORITHMS ***********/

//In-place sorting algorithms

//1. Bubble Sort Algorithm
function bubbleSort(arr) {

    while(true) {
        let swaps = 0;
        for(let i=0; i<arr.length; i++) {
            if(arr[i+1] < arr[i]) {
                let swap = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
                ++swaps;
                //console.log(arr);
            }
        }
        if(swaps == 0) break;
    }
    return arr;
}


//2. Selection Sort Algorithm
function selectionSort(arr) {

    for(let i=0; i<arr.length; i++) {
        let min = i;

        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        let swap = arr[min];
        arr[min] = arr[i];
        arr[i] = swap;
        //console.log(arr);

    }
    return arr;
}

//3. Insertion Sort Algorithm
function insertionSort(arr) {

    for(let i=1; i<arr.length; i++) {
        let position = arr[i];
        let j = i-1;

        while(j>=0 && arr[j] > position) {
            arr[j+1] = arr[j];
            j = j-1;
            //console.log("if: " + arr);
        }
        //console.log("before: " + arr);
        arr[j+1] = position;
        //console.log(arr);

    }
    return arr;
}

//arr = [1,3,5,2];
arr = [86, 15, 9, 19, 11, 18, 54, 59, 46, 20, 71, 6, 99, 89, 95, 38, 17, 74, 30, 49];
sortArr = insertionSort(arr);
console.log(sortArr);