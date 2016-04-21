//Exercise: Refactor the code below. What improvements can be made?

/*
while ( n <= 20 ) {
  if ( n !== 13 && n % 2 === 0 ) {
    console.log("I like the number " + n + ", a nice even number.");
  } else if ( n !== 13 && n % 2 !== 0 ) {
    console.log("I like the number " + n + ", odd is okay too!");
  } else {
    console.log("la-la-la, nothing to say here");
  }
  n++;
}
*/
var n = 0;

while ( n <= 20 ) {
  if ( n === 13 || n === 0) {
    console.log("la-la-la, nothing to say here");
  } else {
  	console.log("I like the number " + n + ((n % 2 === 0) ? ", a nice even number." : ", odd is okay too!") )
  };
  n++;
}