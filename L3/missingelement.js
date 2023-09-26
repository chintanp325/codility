// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const l = A.length;
    const sumOfRange = (l+1)*(l+2)/2;
    const sumOfarray = A.reduce((sum,num) => sum + num,0);
    var missEle = sumOfRange-sumOfarray;
    return missEle;
}
