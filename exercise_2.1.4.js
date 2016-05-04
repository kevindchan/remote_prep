/*
Exercises: Simple Math

1. Write a function called tripler that takes a number and returns triple the value.
2. Create a function multiply that takes two numbers as inputs and returns their product
3. Create a function divide that takes two numbers as inputs and returns the result of dividing the first by the second
4. Create a function remainder that takes two numbers as inputs and returns the result of modulo the first by the second
5. Using only the functions you wrote above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing by 2 and then finding the remainder of dividing that by 3.
6. Write 4 more lines of code that use all of your math functions in a single expression
*/

function tripler(x) {
	return x * 3;
}

function multiply(a, b) {
	return a * b;
}

function divide(m, n) {
	return m / n;
}

function remainder(d, e) {
	return d % e;
}

console.log(remainder(divide(multiply(tripler(5), 12), 2), 3));

console.log(remainder(multiply(divide(tripler(4), 4), 4), 2));

console.log(tripler(divide(multiply(remainder(10, 3), 10), 6)));

console.log(multiply(tripler(remainder(divide(10, 3), 2)), 99));

console.log(multiply(divide(tripler(remainder(3425, 23)), 33), 400));
