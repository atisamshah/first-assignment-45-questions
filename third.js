// ***** Question 11
var friends = ["Umair", "Nadeem", "Wali", "Zaeem", "Bilal"];
for (var i = 0; i < friends.length; i++) {
    console.log("".concat(i + 1, " -> ").concat(friends[i], " "));
}
// ***** Question 12
console.log("\n\n");
var msg = " is one of my friend.";
for (var i = 0; i < friends.length; i++) {
    console.log("".concat(i + 1, " -> ").concat(friends[i], " ").concat(msg, " "));
}
// ***** Question 13
var vehicle = ["lamborghini", "ferrari", "Lexus", "BMW"];
vehicle.forEach(function (single_vehicle) {
    console.log("".concat(single_vehicle, " is one of my favourit car."));
    console.log("I definetly would love to purchase ".concat(single_vehicle, "."));
    console.log("".concat(single_vehicle, " is luxrious car."));
    console.log("".concat(single_vehicle, " is eyecatching car."));
    console.log("".concat(single_vehicle, " is two doors car.\n\n"));
});
// ***** Question 14
console.log("\n\n");
var guests = ["Nadeem", "Wali", "Zaeem", "Abid"];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], "! you are invited on dinner."));
}
// ****** Question 15
// updating guest list (array)
console.log("\n\n");
guests[2] = "Jamshaid";
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], "! you are invited on dinner."));
}
