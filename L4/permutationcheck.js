// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let uniqueA = {};
    var B = [];
    var j = 0;
    const la = A.length;
    var skip = 0;
    for (let i = 0; i < la; i++) {
        let element = A[i];
        if(A[i]>la){
            return 0;
            skip = 1;
        }
        if (uniqueA[element] === undefined) {
        uniqueA[element] = 1;
        B[j] = A[i];
        j++; 
        } 
    }
    B.sort();
    const lb = B.length;
    if(la == lb && B[lb-1]==lb && B[0]==1 && skip==0){
        return 1;
    }
    else{
        return 0;
    }
}

function solution(A) {
    const N = A.length;
    const seen = new Set();

    for (let i = 0; i < N; i++) {
        const num = A[i];
        
        if (num < 1 || num > N || seen.has(num)) {
            return 0;
        }
        
        seen.add(num);
    }
    
    return seen.size === N ? 1 : 0;
}
