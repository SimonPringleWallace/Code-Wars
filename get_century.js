var century = function(x){
  if (x <= 100) {
  	return (1);
} else if (x <1000) {
  	var centuryString = String(x);
  	var first = centuryString[0];
  	firstInt = parseInt(first);
  	return(firstInt+1);
} else if (x < 10000) {
	var centuryString = String(x);
	var firstTwo = centuryString[0]+centuryString[1];
    firstTwoInt = parseInt(firstTwo);
    return(firstTwoInt+1);
}
}


