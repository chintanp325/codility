// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    var N = 123;
    var binaryofN = N.toString(2);
    var l = binaryofN.length;
    var indicesOfOnes = [];
    var binaryGap = [];
    var bgap = 0;
    for (let i = 0; i < l; i++) {
      const character = binaryofN[i];
      if (character === "1"){
          indicesOfOnes.push(i);
      }  
    }
    var l2 = indicesOfOnes.length
    if (l2 >1){
        for (let j = 0; j < l2-1; j++) {
            binaryGap[j] = indicesOfOnes[j+1] - indicesOfOnes[j] -1;
        }
        bgap = Math.max(...binaryGap);
    }
    return bgap;    
}
