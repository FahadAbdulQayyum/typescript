// 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

const friendsNames1 : Array<String> = ["Aftab","Noor","Abdul Jabbar", "Dost"]
const message : string = "How are you";

// console.log(message,friendsNames[0]+'?'); // one way to do

friendsNames.forEach(name=>console.log(message,name+'?'))


