/*
Exercise: Shuffler 

Create a function shuffler that takes an array as input and returns a new array of the same elements in a random order. Is your shuffle perfectly mathematically random or only pseudo-random? How computationally efficient is it- i.e. how many lines of code need to be run?
*/

function shuffler(arr) {
	var length = arr.length;
	var newArray = [];
	var randomFromLength = function(min,max){
    	return Math.floor(Math.random()*(max-min+1)+min);
	};

	while (length > 0) {
		var newIndex = randomFromLength(0, length);
		var spliced = arr.splice(newIndex, 1);
		newArray.push(spliced);
		// if (length === 1) {
		// 	newArray.indexOf(undefined)
		// }
	}
	console.log(newArray)
}

shuffler([2, 3, 5, 7, 9]);

