/*
Exercise: Remember while loops?

1. Write a function called factoral_of_n that takes a number and returns the factoral i.e. factoral_of_n(5) should return 120 (5x4x3x2x1).
2. Write a function called count_by_n that has parameters count_by and count_up_to, and console.log's the numbers up to count_up_to by intervals of count_by.
*/

function factorialOfN(num){
	var i = 0,
		product = 1;
	while (i < num) {
		product *= i + 1;
		i++;
	}
	return product;
}

function countByN(countBy, countUpTo) {
	var i = 0;
	while (i < countUpTo) {
		i += countBy;
		console.log(i);
	}
}

countByN(4, 20)