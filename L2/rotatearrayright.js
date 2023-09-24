// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // Implement your solution here
    var B = A;
    var l = B.length;
    var rem = K%l;
    var lastelement;
    if (rem == 0){
        return B;
    }
    else{   
        for(let i=1; i<=rem; i++){
            lastelement = B[l-1];
            for(let j=l-1; j>0; j--){
                B[j] = B[j-1];
            }
            B[0] = lastelement;
        }
    return B;
    }    
}
