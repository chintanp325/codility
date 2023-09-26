// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here
    var B = [];
    var i = 0;
    var c = 0;
    var reached = 0;
    B[0] = 1;
    while (reached == 0){                
        c = A[i];
        B[c] = 1;
        if (B[X] ==1){
            var sum = 0;
            for(let j=0;j<=X;j++){
                sum = sum + B[j];
            }
            if(sum == X+1){
                reached = 1;
            }            
        }
        i++;                
    }
    return i-1;
}




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here
    var B = [];
    var i = 0;
    var c = 0;
    var reached = 0;
    const l = A.length;
    B[0] = 1;
    if(l==1){
        if(A[0]==X){
            return 0;
        }
    }
    else{
        while (reached == 0 && i<=l){                
        c = A[i];
        B[c] = 1;
        if (B[X] ==1){
            var sum = 0;
            for (let j=0;j<=X;j++){
                sum = sum + B[j];
            }
            if (sum == X+1){
                reached = 1;
            }            
        }
        i++;
        }                
    }    
    return i-1;
}










// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here
    var B = [];
    var i = 0;
    var c = 0;
    var reached = 0;
    const l = A.length;
    B[0] = 1;
    if(l==1){
        if(A[0]==X){
            return 0;
        }
    }
    else{
        while (reached == 0 && i<=l){                
        c = A[i];
        B[c] = 1;
        if (B[X] ==1){
            var sum = 0;
            for (let j=0;j<=X;j++){
                sum = sum + B[j];
            }
            if (sum == X+1){
                reached = 1;
            }            
        }
        i++;
        }                
    }
    if(i>l && reached ==0){
        return -1;            
    }
    else{
        return i-1;
    }       
}








// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here
    var B = [];
    var i = 0;
    var c = 0;
    var reached = 0;
    const l = A.length;
    B[0] = 1;
    if(l==1){
        if(A[0]==X){
            return 0;
        }
    }
    else{
        while (reached == 0 && i<=l){                
        c = A[i];
        B[c] = 1;
        if (B[X] ==1){
            var sum = 0;
            for (let j=0;j<=X;j++){
                sum = sum + B[j];
            }
            if (sum == X+1){
                reached = 1;
            }            
        }
        i++;
        }                
    }    
    return i-1;
}










// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // Implement your solution here
    var B = [];
    var i = 0;
    var c = 0;
    var sum = 1;
    var reached = 0;
    const l = A.length;
    B[0] = 1;
    if(l==1){
        if(A[0]==X){
            return 0;
        }
    }
    else{
        while (reached == 0 && i<=l){                
        c = A[i];
        if(B[c]!=1){
            B[c] = 1;
            if(c<=X){
                sum = sum + B[c];
            }
        }  
        if (B[X] ==1 && sum == X+1){
            reached =1;
        }
        i++;
        console.log('i = ' + i);
        console.log(B);
        console.log('sum = ' + sum);
        }                
    }
    if(i>l && reached ==0){
        return -1;            
    }
    else{
        return i-1;
    }
}

