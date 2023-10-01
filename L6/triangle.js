// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    var triangular = 0;
    const B = A.filter(num => num>0);
    B.sort((a, b) => a - b);
    const l = B.length;
    if(l>2){
        let i=l-1;
        while(triangular == 0 && i>1){        
            if(B[i-2]+B[i-1]>B[i]){
                triangular = 1;
            }
            i--;
        }
    }
    else{
        triangular = 0;
    }
    return triangular;
}
