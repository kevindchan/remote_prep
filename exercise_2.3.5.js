/*
Exercise:

1. Write a function reverser which will take an array of values as an input and return a new array of the same values in reverse order.
2. Inside reverser instantiate a new array reversed_array, use a for loop to populate it, then return it from the function.
*/

function reverser(arr) {
	arr.reverse();
	var reversed_array = [];
	for (var i = 0; i < arr.length; i++) {
		reversed_array.push(arr[i]);
	}
	return reversed_array;
}

console.log(reverser([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));