

function howManyHundreds(num){
  const value = (num % 100)
  const value2 = Math.floor(num / 100)
  
  

return value, value2;
}



console.log(howManyHundreds(894));
// console.log(howManyHundreds(894), "=?", 8);
// console.log(howManyHundreds(520), "=?", 5);
// console.log(howManyHundreds(99), "=?", 0);
// console.log(howManyHundreds(0), "=?", 0);

