// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // Implement your solution here
    const l = S.length;
    var nested = 1;
    var x = 0;
    var A = [];
    A[x] = S[x];
    x++;
    if(l!=0){
        while(x<l && nested==1){
            if(S[x]=='(' || S[x]=='{' || S[x]=='['){
                A.push(S[x]);
            }
            else if(S[x]==')' && A.pop()!='('){
                nested = 0; 
            }
            else if(S[x]=='}' && A.pop()!='{'){
                nested = 0; 
            }
            else if(S[x]==']' && A.pop()!='['){
                nested = 0; 
            }
            x++;
        }
        if(A.length>0){
            nested = 0;
        }
    }
    return nested;
}
