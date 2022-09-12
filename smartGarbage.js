"use strict";


const smartGarbage = function(trash, bins){
  
  if (trash === "waste"){
    bins['waste']++;
  }

  if (trash === "recycling"){
    bins["recycling"]++;
  }

  if (trash === "compost"){
    bins["compost"]++;
  }
  console.log(bins);
  return bins;
}



smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });




