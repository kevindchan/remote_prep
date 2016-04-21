//Exercise: Fencepost Loop

//*1. Create a variable n and assign it an integer.
//*2. Code a while loop that builds as a single string, the numbers 1 through n, separated by commas
//*3. How can we make sure not to have a comma after the last number? e.g., for n = 9 print "1, 2, 3, 4, 5, 6, 7, 8, 9" === (use ternary condition: i === 9 ? "" : " ,")
//4. Use .textContent to place that string into a div#target in the HTML document.
//5. Now change your code to create a string full of <p> tags, with the number inside, and with <hr> dividers between them (but not after the last one), and use .innerHTML to place them into the page.
//6. Give odd numbers a class of "odd", even numbers a class of "even." Have a css rule inside your <style> tag that styles them differently.


var n = 10;
var i = 1;
var string = "";
//string = string + i + ", "

while (i <= n) {
	string += i + (i === n ? "" : " ,"); //string = string + i + (i === n ? "" : " ,")
	i++;
};

console.log(string);