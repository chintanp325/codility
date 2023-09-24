// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution1(A) {
    // Implement your solution here
    var l = A.length;
    let B = new Array(l).fill(0);
    var rem;
    for(let i=0; i<l; i++){
        for(let j=0; j<i; j++){
            if(A[i]==A[j]){
                B[i] = B[i]+1;
            }
        }
        for(let k=i+1; k<l; k++){
            if(A[i]==A[k]){
                B[i] = B[i]+1;
            }
        }
        rem = B[i]%2;
        if(rem == 0){
            return A[i];
        }
    }
    
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution2(A) {
    // Implement your solution here
    let occurrenceMap = {};
  
    for (let i = 0; i < A.length; i++) {
        let element = A[i];
        
        if (occurrenceMap[element] === undefined) {
        occurrenceMap[element] = 1;
        } else {
        occurrenceMap[element]++;
        }
    }
    for (let key in occurrenceMap) {
        if(occurrenceMap[key]%2 == 1){
            return (parseInt(key));            
        }
    }
}

A = []