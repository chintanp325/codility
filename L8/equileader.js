function solution(A) {
    // Implement your solution here
    let stack = [];
    let size = 0;
    let candidate = null;
    let candidateCount = 0;

    // Find the candidate for the leader
    for (let i = 0; i < A.length; i++) {
        if (size === 0) {
            stack.push(A[i]);
            size++;
        } else {
            if (stack[size - 1] !== A[i]) {
                stack.pop();
                size--;
            } else {
                stack.push(A[i]);
                size++;
            }
        }
    }

    if (size > 0) {
        candidate = stack[size - 1];
        for (let i = 0; i < A.length; i++) {
            if (A[i] === candidate) {
                candidateCount++;
            }
        }
    } else {
        return 0; // No leader, hence no equi leaders
    }

    // Count the equi leaders
    let equiLeaderCount = 0;
    let leftLeaderCount = 0;

    for (let i = 0; i < A.length; i++) {
        if (A[i] === candidate) {
            leftLeaderCount++;
        }

        if (
            leftLeaderCount > (i + 1) / 2 && // Leader on the left
            candidateCount - leftLeaderCount > (A.length - i - 1) / 2 // Leader on the right
        ) {
            equiLeaderCount++;
        }
    }

    return equiLeaderCount;

}