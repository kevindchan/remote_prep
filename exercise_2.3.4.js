/*
Exercise:

1. use .split(' ') on scrambled_poem and save the result as an array scrambled_array
2. Create a new array unscrambled_array
3. While the length of scrambled_array is greater than 0, remove the FIRST and LAST value and store add them to unscrambled_array.
4. Turn the values in unscrambled_poem into a string by using the array's native .join(' ') method.
*/

var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are";

var scrambled_array = scrambled_poem.split(' ');
var unscrambled_array = [];

while (scrambled_array.length > 0) {
	unscrambled_array.push(scrambled_array.shift());
	unscrambled_array.push(scrambled_array.pop());
}

console.log(unscrambled_array.join(' '));