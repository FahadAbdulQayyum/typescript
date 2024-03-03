// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
var users = ["Fahad", "Aftab", "Haider"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // users.forEach(user => console.log("Welcome "+user+" !"));
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
    // console.log('splitted', splitted.push(str.split[str.length-1]));
    var splitt = str_1.split(", ")[splitted.length - 2];
    // console.log('---',splitt)
    console.log('---', typeof splitt);
    splitted.push(splitt + "!");
    console.log('splitted', splitted.join(" "));
    // console.log('splitted', splitted);
    console.log(str_1);
}
