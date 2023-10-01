// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // Implement your solution here
    var upstreamfish = 0;
    var downstreamfish = [];
    for(let i=0;i<A.length;i++){
        if(B[i]==0){
            while(downstreamfish.length>0){
                if(downstreamfish[downstreamfish.length-1]>A[i]){
                    break;
                }
                else{
                    downstreamfish.pop();
                }
            }
            if(downstreamfish.length==0){
                upstreamfish++;
            }
        }
        else{
            downstreamfish.push(A[i]);
        }
    }
    return upstreamfish+downstreamfish.length;
}
