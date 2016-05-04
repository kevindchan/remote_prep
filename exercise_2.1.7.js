/*
Exercise: FizzBuzz 2: FizzBuzz's revenge

1. Write a function this_that that takes in two strings and reimplements fizzBuzz using those two words instead of 'fizz' and 'buzz' (prints the numbers from 1 to 100. But for multiples of three print word1 instead of the number and for the multiples of five print word2. For numbers which are multiples of both three and five print word1word2.)
2. In the first iteration, have this_that return a long string of the counting seperated by commas
3. Now refactor such that this_that uses $('#output').append() each time to add new divs to the page
4. Allow the user to input a count_up_to argument
5. Allow the user to input fizz_num and buzz_num arguments to set the word substitutions to multiples of something other than 3 and 5
*/

function thisThat(word1, word2) {
	var i = 1,
		string = "";

	while (i <= 100) {
		if (i % 3 === 0 && i % 5 === 0) {
			string += word1 + word2 + ", ";
		} else if (i % 5 === 0) {
			string += (i !== 100) ? word2 + ", " : word2;
		} else if (i % 3 === 0) {
			string += word1 + ", ";
		} else {
			string += i + ", ";
		};
		i++;
	}
	console.log(string)
}

thisThat("this", "that");