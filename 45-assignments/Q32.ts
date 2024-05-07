// Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

const currentUsers : Array<String> = ["Fahad", "Aftab", "Haider", "Noor", "Gul", "AsIF", "Marwan"]; // users array
const newUsers : Array<String> = ["Tahir", "Ubaid", "Abid", "MarWaN", "Asif", "Saeed", "Abdullah"]; // new users array
const notAcceptedUsers : Array<String> = [];


for (let i = 0; i < currentUsers.length; i++) {
    for (let j = 0; j < newUsers.length; j++) {
        if (currentUsers[i].toLowerCase() === newUsers[j].toLowerCase()) {
            notAcceptedUsers.push(currentUsers[i]);
        }
    }
}

let lowerNotAcceptedUsers = notAcceptedUsers.map(user => user.toLowerCase());
newUsers.map(user => !lowerNotAcceptedUsers.includes(user.toLowerCase())?console.log(user+" is available."):'');
notAcceptedUsers.forEach(user => console.log(user.charAt(0).toUpperCase()+user.slice(1,).toLowerCase()+' will need to enter new username.'));
