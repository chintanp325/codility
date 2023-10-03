function solution(A) {
    let maxEndingHere = A[0]; // Initialize with the first element
    let maxSoFar = A[0];      // Initialize with the first element

    for (let i = 1; i < A.length; i++) {
        // Calculate the maximum ending at the current element or adding the current element to the previous maximum ending
        maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
        
        // Update the maximum sum found so far
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}

// Example usage
const A = [3, 2, -6, 4, 0];
console.log(solution(A)); // Output: 5
