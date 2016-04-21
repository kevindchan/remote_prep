// Exercise: Cumulative Sum

//1. Write a while loop that computes the product of multiplying the first n positive integers: product = 1 * 2 * 3 * ... * n.
//2. Use .innerHTML to place a formatted piece of text into the HTML document that explains what n was and what the product of the numbers computed to.
//3. Give the tags different classes and ids that match pre-written CSS with some styling to make it a bit prettier.

var n = 1, sum = 1;

while (n <= 50) {
	sum *= n; 
	n++;
};	

console.log(sum);