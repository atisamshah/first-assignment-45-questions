// ***** Question 11

let friends: string[] = ["Umair", "Nadeem", "Wali", "Zaeem", "Bilal"] ;

for (let i=0; i<friends.length; i++) {
    console.log(`${i+1} -> ${friends[i]} `);
}

// ***** Question 12

console.log("\n\n");
let msg = " is one of my friend.";

for (let i=0; i<friends.length; i++) {
    console.log(`${i+1} -> ${friends[i]} ${msg} `);
}

// ***** Question 13

let vehicle:string[] = ["lamborghini", "ferrari", "Lexus", "BMW"];

vehicle.forEach((single_vehicle) => {
    console.log(`${single_vehicle} is one of my favourit car.`);
    console.log(`I definetly would love to purchase ${single_vehicle}.`);
    console.log(`${single_vehicle} is luxrious car.`);
    console.log(`${single_vehicle} is eyecatching car.`);
    console.log(`${single_vehicle} is two doors car.\n\n`);
})

// ***** Question 14

console.log("\n\n");
let guests: string[] = ["Nadeem", "Wali", "Zaeem", "Abid"];

for (let i=0; i<guests.length; i++) {
    console.log(`Dear ${guests[i]}! you are invited on dinner.`);
}

// ****** Question 15

// updating guest list (array)

console.log("\n\n");
guests[2] = "Jamshaid";

for (let i=0; i<guests.length; i++) {
    console.log(`Dear ${guests[i]}! you are invited on dinner.`);
}