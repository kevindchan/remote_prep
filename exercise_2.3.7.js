/* 
Exercise: Write a function biggest_smallest that takes an array of numbers as an input, uses .forEach(), and returns an array containing the smallest number in the zeroth position and the largest number in the first position.
*/

function biggestSmallest (arr) {
	//array.forEach((currentValue, index, arr), thisValue)
	var biggest = arr[0],
		smallest = arr[0];
	arr.forEach(function (num){
		if (num > biggest) {
			biggest = num;
		} else if (num < smallest) {
			smallest = num;
		}
	})
	var newArray = new Array (smallest, biggest) //Array constructor
	// newArray[0] = smallest;
	// newArray[1] = biggest;
	console.log(newArray);
	//return array with smallest in arr[0] and largest in arr[1]	
}

var arr = [ 10, 100, 2, 23, 45, 1000, 1 ]

biggestSmallest(arr);


