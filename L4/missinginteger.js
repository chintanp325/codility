// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let occurrenceMap = {};
    var B = [];
    var C = [];
    var j = 0;
    B = A.filter((num) => num>0);
    for (let i = 0; i < B.length; i++) {
        let element = B[i];        
        if (occurrenceMap[element] === undefined) {
            occurrenceMap[element] = 1;
            C[j] = B[i];
            j++;
        }
    }
    C.sort((a, b) => a - b);
    const l = C.length;
    if(l != 0){
        if(C[0]>1){
            return 1;
        }
        else if(C[0] == 1 && C[l-1] == l){
            return l+1;
        }
        else if(C[0] == 1 && C[l-1] > l){
            for(let k=0;k<l;k++){
                if(!(C.includes(k+1))){
                    return k+1;
                }
            }
        }
    }
    else{
        return 1;
    }
}






// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    var B = [];
    var solfound = 0;
    B = A.filter((num) => num>0);
    const l = B.length;
    if(l != 0){       
        for(let k=0;k<l;k++){
            if(!(B.includes(k+1))){
                return k+1;
                solfound = 1;
            }
        }
        if(solfound == 0){
            return l+1;
        }        
    }
    else{
        return 1;
    }
}



function solution(A) {
    // Implement your solution here
    let occurrenceMap = {};
    var B = [];    
    var j = 1;
    var missingelement = 0;
    var solfound = 0;
    B = A.filter((num) => num>0);
    B.sort((a, b) => a - b);
    const l = B.length;
    if(l != 0){
        for (let i = 0; i < l; i++) {
            let element = B[i];        
            if (occurrenceMap[element] === undefined && solfound == 0) {
                occurrenceMap[element] = 1;
                if(B[i]!=j){
                    missingelement = j;
                    solfound = 1;
                }
                j++;
            }
        }
        return missingelement;
        if(solfound == 0){
            return B.length+1;
        }
    }    
    else{
        return 1;
    }
}



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    let occurrenceMap = {};
    var B = [];    
    var j = 1;
    var missingelement = 0;
    var solfound = 0;
    B = A.filter((num) => num>0);
    B.sort((a, b) => a - b);
    const l = B.length;
    if(l != 0){
        for (let i = 0; i < l; i++) {
            let element = B[i];        
            if (occurrenceMap[element] === undefined && solfound == 0) {
                occurrenceMap[element] = 1;
                if(B[i]!=j){
                    missingelement = j;
                    solfound = 1;
                }
                j++;
            }
        }
        if(solfound == 0){
            return B.length+1;
        }
        else{
            return missingelement;
        }    
    }    
    else{
        return 1;
    }
}


    
[0]
[0,0,0,0,0,0,0,0,0,0]
[-1]
[-2,-2,-2,-2,-2,-2,-2,-2]
[-1,-2,-3,-8,-9,-152]
[1,2,3,4,5,6,7,8,9,10,11,12]
[1,2,3,0,4,5,6,0,7,8,-1,-3,9,10,11,12]
[1,2,3,0,4,5,5,0,7,8,-1,-3,9,10,11,12]

function solution(A) {
    // Implement your solution here
    const N = A.length;
    const set = new Set(A);

    // Find the smallest positive integer that does not occur
    for (let i = 1; i <= N + 1; i++) {
        if (!set.has(i)) {
        return i;
        }
    }
}