
// Bai 1:
/////////////////////////////////////////////////////////////////////////////////////////
function sort3n(arr){
  let out = [],n = arr.length/3;
  
  for(i = 0; i < n; i++){
    out = out.concat([arr[i], arr[n+i], arr[2*n+i]]);
  }
  
  return out;
}
console.log(sort3n( [11, 2, 8, 10, 5, 99, 1, 8, 9]));


// Bai 2:
/////////////////////////////////////////////////////////////////////////////////////////
let arr = [0, 100, -4, 8, 143, 5, 99, 100], max = 0;
for(i = 0; i < arr.length; i++){
  for(j=0; j < arr.length && j!=i; j++){
    arr[i] + arr[j] > max && (max = arr[i] + arr[j]);
  }
}
console.log(max)


// Bài 3:
/////////////////////////////////////////////////////////////////////////////////////////

let a3=[1, 5, 4, 7, 9, 0, -10, 13, 93, 14, 15], tmp = [], minRange = null, absRange;
for(i = 0; i < a3.length; i++){
  for(j=0; j < a3.length && j != i; j++){
    absRange = Math.abs(a3[i] - a3[j]);
    
    if(minRange == null || absRange < minRange) 
      minRange = absRange;
    
    tmp.push({
      range: Math.abs(a3[i] - a3[j]),
      val: [a3[i], a3[j]]
    })
  }
}

let out = tmp.filter(e => e.range==minRange).map(e => e.val);
console.log(out);
