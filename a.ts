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
