/*
Exercise: n numbers are coming to a number party. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:

  "welcome 1"
  "welcome 2, meet 1"
  "welcome 3, meet 1 and 2"
  "welcome 4, meet 1, 2 and 3"
  "welcome 5, meet 1, 2, 3 and 4"
*/

//create variables for: people at party, total people expected to come to party
var atParty = 1,
	justArrived = 0,
	totalParty = 5,
	welcome = "";

//while (people at the party) are LESS THAN (total people expected)
while (atParty <= totalParty) {
	justArrived = 1;
	welcome = "Welcome " + atParty;
	//inner loop is dependant on the outer loop
	while(justArrived < atParty) {
		if (justArrived === 1) {
			welcome += " , meet " + justArrived;
		} else if (justArrived === atParty - 1) {
			welcome += ", and " + justArrived;
		} else {
			welcome += ", " + justArrived;
		};
		justArrived++;
	};
	console.log(welcome);
	atParty++;
};
