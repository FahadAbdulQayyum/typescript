// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// const users : Array<String> = ["Fahad", "Aftab", "Haider"]; // Non-empty array
var users = []; // Empty array
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    var str_1 = "";
    str_1 += "Welcome ";
    users.forEach(function (user) {
        if (user.length > 1) {
            str_1 += user + ', ';
        }
    });
    var filteredStr = str_1.slice(0, str_1.length - 2);
    var splitted = filteredStr.split(" ");
    splitted.splice(splitted.length - 1, splitted.length, "and");
    var splitt = str_1.split(", ")[splitted.length - 2];
    splitted.push(splitt + "!");
    console.log(splitted.join(" "));
}
