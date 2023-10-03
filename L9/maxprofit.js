function solution(A) {
    // Implement your solution here
    if (A.length <= 1) {
        return 0; // If there are no prices or only one price, no profit can be gained
    }

    let maxProfit = 0; // Initialize the maximum profit
    let minPrice = A[0]; // Initialize the minimum price

    for (let i = 1; i < A.length; i++) {
        // Calculate the potential profit if sold at the current day
        const potentialProfit = A[i] - minPrice;

        // Update maxProfit if potentialProfit is greater
        maxProfit = Math.max(maxProfit, potentialProfit);

        // Update minPrice if the current price is smaller
        minPrice = Math.min(minPrice, A[i]);
    }

    return maxProfit;

}