// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const seen = new Set();
    for(num of A){
        if(!seen.has(num)){
            seen.add(num);
        }
    }
    return seen.size;
}
