// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    var B = [];
    var dominator = -1;
    var value = 0;
    var count = 0;
    for(let i=0;i<A.length;i++){
        if(B.length==0){
            B.push(A[i]);
            value = A[i];
        }
        else{
            if(value != A[i]){
                B.pop();
            }
            else{
                B.push(A[i]);
            }
        }
    }
    if(B.length>0){
        for(let j=0;j<A.length;j++){
            if(A[j]==B[B.length-1]){
                count++;
            }
        }
        if(count>=A.length/2){
            dominator = A.indexOf(B[B.length-1]);
        }
    }
    else{
        dominator = -1;
    }
    return dominator;
}




function solution(A) {
    let candidate = -1;
    let count = 0;

    // Find a potential candidate for the dominator
    for (let i = 0; i < A.length; i++) {
        if (count === 0) {
            candidate = A[i];
            count = 1;
        } else {
            if (candidate === A[i]) {
                count++;
            } else {
                count--;
            }
        }
    }

    // Count the occurrences of the potential candidate
    let candidateCount = 0;
    let candidateIndex = -1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            candidateCount++;
            candidateIndex = i;
        }
    }

    // Check if the candidate is a dominator
    if (candidateCount > A.length / 2) {
        return candidateIndex;
    } else {
        return -1;
    }
}

// Test example
const A = [3, 4, 3, 2, 3, -1, 3, 3];
console.log(solution(A)); // Output: 0, 2, 4, 6, or 7
