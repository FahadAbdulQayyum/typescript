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

const famousQuote : string = "Albert Einstein once said, “A person who never made a mistake never tried anything new."
console.log(famousQuote)
