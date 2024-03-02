// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

const admins : Array<string> = ['admin', "fahad", "aftab", "noor", "jabbar", "gul"];
admins.forEach(admin => admin === 'admin' ? console.log("Hello",admin.charAt(0).toUpperCase()+admin.slice(1).toLowerCase()+", thank you for logging in again.") : console.log("Hello",admin.charAt(0).toUpperCase()+admin.slice(1).toLowerCase()+", would you like to see a status report?"));
