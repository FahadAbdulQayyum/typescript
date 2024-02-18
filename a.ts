// 1. Install Node.js, TypeScript and VS Code on your computer.

/*********************************************************************************/
// 2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

const personName : string = 'Aftab'
console.log('AsSalam-O-Alaikum,',personName+'!', "Let's learn python together.")

/*********************************************************************************/
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

console.log(personName.toLowerCase()) // aftab
console.log(personName.toUpperCase()) // AFTAB
console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase()) // Aftab

/*********************************************************************************/
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks: with writer

console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.”")

/*********************************************************************************/
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

const famousQuote : string = "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
console.log(famousQuote)

/*********************************************************************************/
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const strippedName : string = "   Fahad    "
console.log(strippedName)
console.log(strippedName.trim())

/*********************************************************************************/
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

const a : number = 5;
const b : number = 3;
const c : number = 4;
const d : number = 2;

const addition : number = a + b;
const multiplication : number = c * d;
const division : number = (addition * d) / d;

console.log('Addition:', addition);
console.log('Multiplication:', multiplication);
console.log('Division:', division);

/*********************************************************************************/
// 8. You should create four lines that look like this:

console.log('********************************************************************************')
console.log("console.log(5 + 3)")
console.log('********************************************************************************')

/*********************************************************************************/
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

const favoriteNumber : number = 40;
console.log("I like this number: "+favoriteNumber)

/*********************************************************************************/
// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// This is how we write comments in programming languages for reminding ourselves after years
// This is generally written for the very first time when one learns coding.
console.log("Hello World!");

/*********************************************************************************/
// 11. Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const friendsNames : Array<String> = ["Aftab","Noor","Abdul Jabbar", "Dost"]
console.log("First friend's name: "+friendsNames[0]) 
console.log("Second friend's name: "+friendsNames[1]) 
console.log("Third friend's name: "+friendsNames[2]) 
console.log("Fourth friend's name: "+friendsNames[3]) 

/*********************************************************************************/
// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const message : string = "How are you";

// console.log(message,friendsNames[0]+'?'); // one way to do

friendsNames.forEach(name=>console.log(message,name+'?'))


/*********************************************************************************/
// 13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const favouriteTransportations : Array<String> = ["Honda Bike", "Civic Car", "Private Luxury Plan"];

favouriteTransportations.forEach(favTrans =>console.log("I would like to have a",favTrans));

/*********************************************************************************/
// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const guestsToInviteForDinner : Array<String> = ["Aftab", "Noor", "Abdul Jabbar", "Dost Mahmad"];

guestsToInviteForDinner.forEach(personForDinner => console.log("Dear",personForDinner+"! You are invited for Dinner today at 9:00PM in Mariott Hotel."));

/*********************************************************************************/
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

const guestsWhoUnableToMakeFood : Array<String> = ["Marwan", "Dad Shah", "Saifullah", "Abid Ubaid"];

guestsWhoUnableToMakeFood.forEach(unablePerson => console.log("Dear",unablePerson+"! You are invited for Dinner with us."));

/*********************************************************************************/
// 16. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

const newGuests : Array<String> = ["Asif", "Gul Mahmad", "Sarwar", "Razaq"];

newGuests.forEach(guest => console.log("Dear",guest+"! You are invited for Dinner with us too."));

const allGuests : Array<String> = [...guestsToInviteForDinner, ...guestsWhoUnableToMakeFood];

allGuests.forEach(respectedGuest => console.log("Dear",respectedGuest+"! I got a bigger dinner table! So you are invited for Dinner with us today."));

allGuests.unshift("Saeed");

const middleOfArray : number = newGuests.length / 2;

allGuests.splice(middleOfArray, middleOfArray + 1, "Bilal");

allGuests.push("Akbar");

allGuests.forEach(respectedGuest => console.log("Dear",respectedGuest+"!(extra Guest) I got a bigger dinner table! So you are invited for Dinner with us today."));

/*********************************************************************************/
// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

const msg : string = "I can invite only two guests";

while (allGuests.length !== 2) {
    console.log("Sorry",allGuests.pop()+'!',"You are not invited for Dinner!");
}

console.log("Welcome",allGuests+"!","You are invited for Dinner!");

allGuests.length = 0;

console.log("Any Guest?", allGuests);

/*********************************************************************************/
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

const placeToVisit : Array<String> = ["Mecca", "Madina", "Qatar", "Spain", "Palestine"];

console.log("Places to visit in the original order: " + placeToVisit);

const placeToVisitInAlphabeticalOrder : Array<String> = placeToVisit.sort();

console.log("Places to visit in the alphabetical order: " + placeToVisitInAlphabeticalOrder);

console.log("To ensure the original order: " + placeToVisit);

const placeToVisitInReverseAlphabeticalOrder : Array<String> = placeToVisit.sort().reverse();

console.log("Places to visit in the reverse alphabetical order: " + placeToVisitInReverseAlphabeticalOrder);

console.log("To ensure the original order: " + placeToVisit);

console.log('Original order reversed: ' + placeToVisit.reverse());

console.log('Reversed original orders changed: ' + placeToVisit.reverse().sort());

/*********************************************************************************/
// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

console.log("Place to visit in number: ", placeToVisit.length);

console.log("Guests to invite for dinner in number: ", guestsToInviteForDinner.length);

/*********************************************************************************/
// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const lists : Array<String> = [];
function createLists(input : String) : Array<String> {
    lists.push(input);
    return lists;
}

createLists("K2");
createLists("Chenab");
createLists("Madina");
createLists("Karachi");

const LetsSeeList = createLists("Typescript");

console.log("Lets See the List", createLists);

/*********************************************************************************/
// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const myProfile : {name: string,age: number} = {
    name: "Fahad",
    age: 26
    };

// OR

type profileType = {name: string, age: number};

const myProfileWithType : profileType = {
    name: "Fahad", 
    age: 25
}


/*********************************************************************************/
// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const indexError : Array<Number> = [2, 3, 6];

console.log(indexError[3]) // indexError occurs as this does not exist

console.log(indexError[2]) // indexError occurs as this exist, output will be 6


/*********************************************************************************/
// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let IAmFahad : string = "Fahad";

console.log(IAmFahad === "Fahad" ? "Yeah, I'm Fahad." : "No, I'm not Fahad.");

IAmFahad = "Aftab";

console.log(IAmFahad === "Fahad" ? "Yeah, I'm Fahad." : "No, I'm not Fahad.");

let age : number = 17;

console.log(age > 18 ? "You are eligible for CNIC." : "Sorry! You are not eligible for CNIC.");

age = 19;

console.log(age > 18 ? "You are eligible for CNIC." : "Sorry! You are not eligible for CNIC.");

/*********************************************************************************/
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

let firstNumberInString : string = '1';
let secondNumber : number = 1;
let thirdNumber : number = 3;

console.log(firstNumberInString == secondNumber ? "Equal": "Not equal"); // Earlier highlighted the error.
console.log(secondNumber === secondNumber ? "Equal": "Not Equal"); // Equal or unequal.
console.log(secondNumber === thirdNumber ? "Equal": "Not Equal"); // Equal or unequal.
console.log(secondNumber > thirdNumber ? "Greater": "Not Greater"); // greater or not greater.
console.log(secondNumber < thirdNumber ? secondNumber+" Less than "+thirdNumber: secondNumber+" Not Less than "+thirdNumber); // less than and not less than with values.

console.log((secondNumber === thirdNumber)&&(secondNumber === 3) ? "Equal": "Not Equal"); // Equal or unequal.
console.log((secondNumber === thirdNumber)||(secondNumber === 3) ? "Equal": "Not Equal"); // Equal or unequal.
console.log((secondNumber > thirdNumber)&&(secondNumber < 3) ? "Condition True": "Condition not true"); // Condition True or Condition not true.
console.log((secondNumber > thirdNumber)||(secondNumber < 3) ? "Condition True": "Condition not true"); // Condition True or Condition not true.

console.log(typeof secondNumber === 'number' ? "Number" : "Not a number")
console.log(typeof secondNumber === 'string' ? "Number" : "Not a number")

/*********************************************************************************/
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

const alien_color1 : string =  'green';
const alien_color2 : string =  'yellow';
const alien_color3 : string = 'red';

console.log(alien_color1 === 'green' ? 'You just earned 5 points!' : 'Sorry!');

console.log(alien_color1 === 'green' && 'You just earned 5 points!');


/*********************************************************************************/
// 26. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

if(alien_color1 === 'green') {
    console.log("You just earned 5 points for shooting an alien!");
}else {
    console.log("You just earned 10 points");
}

if(alien_color2 === 'green') {
    console.log("You just earned 5 points for shooting an alien!");
}else {
    console.log("You just earned 10 points");
}

