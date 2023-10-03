let A = {};
let B = [1,2,3,1,3,2,4,5,4,3,1,2,5,4,2,3,1,2,3,4,1,2,5,3,4];
for (let i = 0; i < B.length; i++) {
    let element = B[i];
    if(A[element]=== undefined){
        A[element] = 1;
    }
    else{
        A[element]++;
    }
}
//console.log(A);
let C = {'1':3,'2':6,'3':1,'4':1,'5':1};
for (let j = 0; j < C.length; j++){
    console.log(C[j]);
    console.log(C[j]);
}
    

