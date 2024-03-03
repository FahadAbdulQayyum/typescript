// Q32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var currentUsers = ["Fahad", "Aftab", "Haider", "Noor", "Gul", "AsIF", "Marwan"]; // users array
var newUsers = ["Tahir", "Ubaid", "Abid", "MarWaN", "Asif", "Saeed", "Abdullah"]; // new users array
var notAcceptedUsers = [];
for (var i = 0; i < currentUsers.length; i++) {
    for (var j = 0; j < newUsers.length; j++) {
        if (currentUsers[i].toLowerCase() === newUsers[j].toLowerCase()) {
            notAcceptedUsers.push(currentUsers[i]);
        }
    }
}
var lower = notAcceptedUsers.map(function (user) { return user.toLowerCase(); });
newUsers.map(function (user) { return !lower.includes(user.toLowerCase()) ? console.log(user + " is available.") : ''; });
notAcceptedUsers.forEach(function (user) { return console.log(user.charAt(0).toUpperCase() + user.slice(1).toLowerCase() + ' will need to enter new username.'); });
// for (let i = 0; i < currentUsers.length; i++) {
//     for (let j = 0; j < newUsers.length; j++) {
//         if (currentUsers[i].toLowerCase() === newUsers[j].toLowerCase()) {
//             console.log(currentUsers[i].toLowerCase() + " is already taken!");
//         }
//     }
//     console.log(newUsers[i].toLowerCase() + " is available!");
// }
// currentUsers.forEach(currentUser => newUsers.forEach(newUser => {
//     if(currentUser.toLowerCase() === newUser.toLowerCase()){
//         console.log(currentUser+" will need to enter a new username.");
//     }else{
//         console.log(currentUser+" is available!");
//     }
// }))
// for (let i = 0; i < currentUsers.length; i++) {
//     console.log(currentUsers[i], ' ---- '+ newUsers[i]);
//     if(currentUsers[i].toLowerCase() === newUsers[i].toLowerCase()) {
//         console.log(newUsers[i]+" will need to enter a new username.");
//     }else {
//         console.log(newUsers[i]+" is available!");
//     }
// }
// for (let i = 0; i < currentUsers.length; i++) {
//     if(currentUsers.includes(newUsers[i].toString().toLowerCase())){
//         console.log(currentUsers[i]+" will need to enter a new username.");
//     }else{
//         console.log(currentUsers[i]+" is available.");
//     }
// }
