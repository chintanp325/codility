// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // Implement your solution here
    const l = H.length;
    var min = Number.MAX_VALUE;
    var B = [];
    for(let i=0;i<l;i++){
        if(H[i]<min){
            min = H[i];
        }
    }
    for(let j=0;j<l-1;j++){
        if(H[j]!=H[j+1]){
            H[j] = H[j]-min;
            if(H[j]>0){
                B.push(H[j]);
            }            
        }
    }
    if(H[l-1]-min>0){
        B.push(H[l-1]);
    }
    return B.length;
}




function solution(H) {
    // Implement your solution here
    const stack = [];  // Stack to store heights
    let blocksNeeded = 0;  // Count of blocks needed

    for (let i = 0; i < H.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1] > H[i]) {
            stack.pop();  // Remove blocks until current height can be accommodated
            blocksNeeded++;
        }

        if (stack.length === 0 || stack[stack.length - 1] < H[i]) {
            stack.push(H[i]);  // Push the current height onto the stack
        }
    }

    blocksNeeded += stack.length;  // Add the remaining heights in the stack

    return blocksNeeded;

}