// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    var max = -1*Number.MAX_VALUE;
    const l=A.length;    
    A.sort((a, b) => a - b);
    if(A[l-1]*A[l-2]*A[l-3]>max){
        max = A[l-1]*A[l-2]*A[l-3];
    }
    if (A[0]*A[1]*A[2]>max){
        max = A[0]*A[1]*A[2]
    }
    if (A[l-1]*A[0]*A[1]>max){
        max = A[l-1]*A[0]*A[1]
    }
    if (A[l-1]*A[l-2]*A[0]>max){
        max = A[l-1]*A[l-2]*A[0]
    }
    return max;
}
