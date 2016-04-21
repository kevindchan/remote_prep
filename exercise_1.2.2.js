if (true) {
	console.log("true");
};

if (1 === 3) {
	console.log("nothing");
};

var emotion = "sad";
if (emotion === "sad") {
	console.log("you can do it!");
};

var secret = 2;
var correctSecret = 3;
if (secret !== correctSecret) {
	console.log("incorrect guess")
} else {
	console.log("good guess")
};

var password = "";
var correctPassword = "1234";
if (password === correctPassword) {
	alert("welcome to the matrix!");
} else {
	window.location = "http://www.google.com";
}