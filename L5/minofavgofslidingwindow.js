// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const l=A.length;
    var sum = 0;
    var avg = 0;
    var min = new Array(l-1).fill(Number.MAX_VALUE);
    for(let i=0;i<l-1;i++){
        sum = A[i];
        for(let j=i+1;j<l;j++){
            sum = sum + A[j];
            avg = sum/(j-i+1);
            if(min[i]>avg){
                min[i]=avg;
            }
        }
    }
    return min.indexOf(Math.min(...min));
}



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const l=A.length;
    var sum = A[0];
    var arraysum = 0;
    var avg = 0;
    var min = new Array(l-1).fill(Number.MAX_VALUE);
    for(let i=0;i<l;i++){
        arraysum = arraysum + A[i];
    }
    for(let i=1;i<l;i++){
        sum = sum + A[i];
        avg = sum/(i+1);
        if(min[0]>avg){
            min[0]=avg;
        }
        sum2 = arraysum - sum + A[i];
        avg2 = sum2/(l-1);
        if(min[i]>avg2){
            min[i]=avg2;
        }
        
    }
    return min.indexOf(Math.min(...min));
}




function solution(A) {
    // Implement your solution here
    let minAvgStart = 0;
    let minAvg = (A[0] + A[1]) / 2;

    for (let i = 2; i < A.length; i++) {
        // Calculate average for a slice of length 2
        let avg2 = (A[i - 1] + A[i]) / 2;
        if (avg2 < minAvg) {
            minAvg = avg2;
            minAvgStart = i - 1;
        }

        // Calculate average for a slice of length 3
        let avg3 = (A[i - 2] + A[i - 1] + A[i]) / 3;
        if (avg3 < minAvg) {
            minAvg = avg3;
            minAvgStart = i - 2;
        }
    }
    return minAvgStart;
}