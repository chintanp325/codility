// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    // Implement your solution here
    var a = parseInt(A/K);
    var b = parseInt(B/K);
    if(A>0 && A==B && A%K==0){       
        return 1;
    }
    else if(A==0 && A==B){       
        return 1;
    }
    else if(A==B && A%K!=0){       
        return 0;
    }
    else if(A<K && A==0){        
        return b+1;
    } 
    else if(A<K){        
        return b;
    } 
    else if(A>=K && A%K==0){
        return b-a+1;
    }
    else if(A>=K && A%K!=0){
        return b-a;
    }    
}




[0, 0, 1]
[0, 0, 3]
[3, 3, 3]
[10, 10, 3]
[2, 3, 3]
[2, 3, 4]
[2, 13, 3]
[2,6,7]
[2,9,7]
[2,7,7]
[7,9,7]
[9,13,7]