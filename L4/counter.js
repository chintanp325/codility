// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // Implement your solution here
    var B = [];
    var c = 0;
    var max = 0;
    const l = A.length;
    for(let j=0;j<N;j++){
        B[j] = 0;
    }
    for(let i=0;i<l;i++){
        if(A[i] == N+1){
            for(let j=0;j<N;j++){
                if(B[j]>max){
                    max = B[j];
                }
            }
            for(let j=0;j<N;j++){
                B[j] = max;
            }            
        }
        else if(1<=A[i] && A[i]<=N){
            c = A[i];
            B[c-1]++;
        }
    console.log(B);
    }    
    return B;
}



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // Implement your solution here
    let B = new Array(N).fill(0);
    var c = 0;
    var max = 0;
    const l = A.length;
    
    for(let i=0;i<l;i++){
        if(A[i] == N+1){
            B.fill(max);           
        }
        else if(1<=A[i] && A[i]<=N){
            c = A[i];
            B[c-1]++;
            if(B[c-1]>max){
                max = B[c-1];
            }
        }
    }    
    return B;
}

function solution(N, A) {
    // Implement your solution here
    let maxCounter = 0;
  let tempMax = 0;
  let counters = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    const operation = A[i];
    if (operation >= 1 && operation <= N) {
      if (counters[operation - 1] < maxCounter) {
        counters[operation - 1] = maxCounter;
      }
      counters[operation - 1]++;
      tempMax = Math.max(tempMax, counters[operation - 1]);
    } else if (operation === N + 1) {
      maxCounter = tempMax;
    }
  }

  for (let i = 0; i < N; i++) {
    if (counters[i] < maxCounter) {
      counters[i] = maxCounter;
    }
  }

  return counters;
}