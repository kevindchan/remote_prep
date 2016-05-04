/*
Exercise: Bucket List

1. Instantiate a new array and save it to a variable bucket_list
2. Use bracket notation with the assignment operator to add two life goals to your array.
3. .push() two goals onto the end of your list.
4. .unshift() two goals onto the beginning.
5. What is the array's length at this point?
6. .pop() off one goal and save it to a variable dying_wish
7. .shift() off one goal and save it to a variable do_it_now
8. What is the array's length at this point?
*/

var bucketList = ["attend Hack Reactor", "Raise kids"];

bucketList.push("Eat Lunch", "Sleep Well");

bucketList.unshift("create a software project", "finish these exercises");

console.log(bucketList.length);

var dying_wish = bucketList.pop();
var do_it_now = bucketList.shift();

console.log(bucketList.length);
console.log(dying_wish);
console.log(do_it_now);