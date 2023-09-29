// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    var P = [];
    var Q = [];
    var i = 0;
    var ip = 0;
    var j = 0;
    var nofpair = 0;
    for (var [index, element] of A.entries()) {
        if(element == 0){
            P[i] = index;
            ip++;
            i++;
        }
        else{
            Q[j] = index;
            j++;            
            nofpair = nofpair + ip;            
        }
    }
    console.log(P);
    console.log(Q);
    if(nofpair>1000000000){
        nofpair = -1;
    }
    return nofpair;
}
