/*
Exercise: Create a function array_duplicator, that takes an array as an input, and returns a copy as the output.
*/

var array_duplicator = function(inputArray) {
    var outputArray = [];

   	for (var i = 0; i < inputArray.length; i++) {
   		outputArray.push(inputArray[i]);
   	}

    return outputArray;
};

console.log(array_duplicator([1, 2, 3, 4, 5, 6]))