/*
Exercise: On lines ending '??', figure out what the expression will evaluate to. First form a hypthosis, then try it in the console.
*/

var demo_object = {
    one: 1,
    two: 2,
    three: 3
};
var one = "three";

demo_object['two']; // ?? 2 - correct
demo_object[one]; // ?? "three" - incorrect, result is 3

var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin'
};

var place = 'California';

// state_capitals['place']; // ?? undefined
// state_capitals.place;   // ?? undefined
// state_capitals[place]; // ?? Sacramento

// state_capitals['California']; // ?? Sacramento
// state_capitals.California;   // ?? Sacramento
// state_capitals[California]; // ?? Undefined

for (var Texas in state_capitals) {
    console.log(state_capitals.Texas); //why don't we need quotes around key??
    // what would happen if we logged obj.key instead? Why? Test it.
}
