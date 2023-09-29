// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // Implement your solution here
    var impactfactor = [];
    var output = [];
    var i = 0;
    var j = 0;
    for(const character of S){
        if(character === "A"){
            impactfactor[i] = 1;
        }
        else if(character === "C"){
            impactfactor[i] = 2;
        }
        else if(character === "G"){
            impactfactor[i] = 3;
        }
        else if(character === "T"){
            impactfactor[i] = 4;
        }
        i++;
    }
    console.log('impact factor - ' + impactfactor);
    for(let num=0;num<P.length;num++){
        if(P[num]==Q[num]){
            var c = P[num];
            output[j] = impactfactor[c];
        }
        else{
            const newimpactfactor = impactfactor.slice(P[num],Q[num]+1);
            output[j] = Math.min(...newimpactfactor);
            console.log('newimpactfactor - ' + newimpactfactor);
        }
        console.log(j + ' output - ' + output[j]);
        j++;
        console.log('number of P ' + num);
    }
    console.log('output - ' + output);
    return output;
}





// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // Implement your solution here
    var impactfactor = {};
    var output = [];
    var indexof1 = [];
    var indexof2 = [];
    var indexof3 = [];
    var i = 0;
    var j = 0;
    var k = 0;
    var l = 0;
    var m = 0;
    for(const character of S){
        if(character === "A"){
            impactfactor[i] = 1;
            indexof1[k] = i;
            k++;
        }
        else if(character === "C"){
            impactfactor[i] = 2;
            indexof2[l] = i;
            l++;
        }
        else if(character === "G"){
            impactfactor[i] = 3;
            indexof3[m] = i;
            m++;
        }
        else if(character === "T"){
            impactfactor[i] = 4;
        } 
        i++;
    }
    for(let num=0;num<P.length;num++){
        if(P[num]==Q[num]){
            var c = P[num];
            output[j] = impactfactor[c];
        }
        else{
            const newimpactfactor = impactfactor.slice(P[num],Q[num]+1);
            output[j] = Math.min(...newimpactfactor);
        }
        j++;
    }
    return output;
}



const N = S.length;
  const M = P.length;

  const prefixA = Array(N + 1).fill(0);
  const prefixC = Array(N + 1).fill(0);
  const prefixG = Array(N + 1).fill(0);
  const prefixT = Array(N + 1).fill(0);

  // Calculate prefix sums
  for (let i = 0; i < N; i++) {
    const nucleotide = S[i];
    prefixA[i + 1] = prefixA[i] + (nucleotide === 'A' ? 1 : 0);
    prefixC[i + 1] = prefixC[i] + (nucleotide === 'C' ? 1 : 0);
    prefixG[i + 1] = prefixG[i] + (nucleotide === 'G' ? 1 : 0);
    prefixT[i + 1] = prefixT[i] + (nucleotide === 'T' ? 1 : 0);
  }

  const result = [];

  // Process queries
  for (let K = 0; K < M; K++) {
    const p = P[K];
    const q = Q[K];

    if (prefixA[q + 1] - prefixA[p] > 0) {
      result.push(1);
    } else if (prefixC[q + 1] - prefixC[p] > 0) {
      result.push(2);
    } else if (prefixG[q + 1] - prefixG[p] > 0) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;