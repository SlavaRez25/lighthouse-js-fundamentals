"use strict";

function lastIndexOf(index, num){

  for (let i = index.length - 1; i >= 0; i--) {

    if (index[i] === num){
      if (index[i] > 1){
        return i;
      }


    }
  }   
  return -1;
} 
  
  


console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);


