// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const l = A.length;
    var sum = 0;
    var sum1 = 0;
    var sum2 = 0;
    var B =[];
    var min = Number.MAX_VALUE;
    var index;
    for(let i=0; i<l; i++){
        sum = sum + A[i];
    }
    for(let j=1; j<l; j++){
        sum1 = sum1 + A[j-1];
        sum2 = sum - sum1;
        B[j-1] = Math.abs(sum1-sum2);
        if(B[j-1]<min){
            min = B[j-1];
        }
    }
    console.log(B);    
    return min;
}

