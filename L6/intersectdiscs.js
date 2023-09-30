// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // Implement your solution here
    const l = A.length;
    var il;
    var ir;
    var jl;
    var jr;
    var pair = 0;
    for(let i=0;i<l-1;i++){
        il = i-A[i];
        ir = i+A[i];
        for(let j=i+1;j<l;j++){
            jl = j-A[j];
            jr = j+A[j];
            if((jl<=il&&jr>=ir)||(il<=jl&&jl<=ir)||(il<=jr&&jr<=ir)){
                pair++;
            }
        }
        console.log(pair);
    }
    pair = pair>10000000 ? -1 : pair;
    return pair;
}




function solution(A) {
  const N = A.length;
  const points = [];

  for (let i = 0; i < N; i++) {
    const left = i - A[i];
    const right = i + A[i];
    points.push({ point: left, isStart: true });
    points.push({ point: right, isStart: false });
  }

  points.sort((a, b) => {
    if (a.point !== b.point) {
      return a.point - b.point;
    }
    if (a.isStart && !b.isStart) {
      return -1;
    }
    if (!a.isStart && b.isStart) {
      return 1;
    }
    return 0;
  });

  let intersections = 0;
  let activeDiscs = 0;

  for (let i = 0; i < N * 2; i++) {
    if (points[i].isStart) {
      intersections += activeDiscs;
      activeDiscs++;
    } else {
      activeDiscs--;
    }

    if (intersections > 10000000) {
      return -1;
    }
  }

  return intersections;
}
