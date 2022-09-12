"use strict"


let range = function(start, end, step){
  
  let numArr = [];
  
  
  if (start > end){
    numArr.length = 0;
    return(numArr);
  }

  if (step <= 0){
    numArr.length = 0;
    return(numArr);
  }
  
  while (start <= end){
    
    numArr.push(start);
    start = start + step;
    
  }
  return numArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));


