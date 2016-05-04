/*
Exercise: Fibonacci

By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. For example, the first ten Fibonacci numbers are:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34

Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.
*/

//create a function that accepts a number
function position(x) {

//create a loop that creates an array of the fibonnaci sequence
	var fibo = [0, 1];

	for (var i = 1; i < x; i++) {
		fibo.push(fibo[i] + fibo[i-1]);
	}
//return the number as its corresponding index in the fibonnaci sequence
	console.log(fibo[x]);
}

//try with recursion!!!