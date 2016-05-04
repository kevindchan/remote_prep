/* 
Write a function that pushes all the values in an object to an array.

input: {two: 2, four: 4, three: 3, twelve: 12}
output: [2, 4, 3, 12]
*/
var newArray = [];
function pushy(arr) {
	_.each(arr, function (value, key, list){
		newArray.push(key);
		console.log(newArray);
	})
}

pushy({two: 2, four: 4, three: 3, twelve: 12});