// 16. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

const newGuests : Array<String> = ["Asif", "Gul Mahmad", "Sarwar", "Razaq"];

newGuests.forEach(guest => console.log("Dear",guest+"! You are invited for Dinner with us too."));

const allGuests1 : Array<String> = [...guestsToInviteForDinner, ...guestsWhoUnableToMakeFood];

allGuests.forEach(respectedGuest => console.log("Dear",respectedGuest+"! I got a bigger dinner table! So you are invited for Dinner with us today."));

allGuests.unshift("Saeed");

const middleOfArray : number = newGuests.length / 2;

allGuests.splice(middleOfArray, middleOfArray + 1, "Bilal");

allGuests.push("Akbar");

allGuests.forEach(respectedGuest => console.log("Dear",respectedGuest+"!(extra Guest) I got a bigger dinner table! So you are invited for Dinner with us today."));

