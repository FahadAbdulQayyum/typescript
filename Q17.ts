// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

const msg : string = "I can invite only two guests";

while (allGuests.length !== 2) {
    console.log("Sorry",allGuests.pop()+'!',"You are not invited for Dinner!");
}

console.log("Welcome",allGuests+"!","You are invited for Dinner!");

allGuests.length = 0;

console.log("Any Guest?", allGuests);

