/*
Exercise:

1. Create a variable called my_dream_life and assign to it an empty object
2. Create a variable called property_key and assign to it the string value "job"
3. Use the property_key variable, not the literal string "job" to add a job property to your dream life object.
4. Create a variable another_property_key and give it a value "salary".
5. Use another_property_key, not the literal string "salary", to quantify the value of human life.
6. What does my_dream_life[property_key] return?
7. What does my_dream_life["job"] return?
8. Assign a string "car" to the variable next_property
9. Use the variable next_property to add your dream car to your dream life object.
10. What does my_dream_life[next_property] return?
11. What does my_dream_life["car"] return?
12. Assign the my_dream_life three more properties using the property_key variable rather than literal strings and access them each using variables as well
*/

var myDreamLife = {};

			var propertyKey = "job";
			var anotherPropertyKey = "salary";
			var nextProperty = "car";
			var propertyKey4 = "location";
			var propertyKey5 = "pet";
			var propertyKey6 = "housing";

			myDreamLife[propertyKey] = "software engineer";
			myDreamLife[anotherPropertyKey] = "$100,000";
			myDreamLife[nextProperty] = "Suzuki Ninja";
			myDreamLife[propertyKey4] = "San Francisco";
			myDreamLife[propertyKey5] = "cat";
			myDreamLife[propertyKey6] = "apartment";