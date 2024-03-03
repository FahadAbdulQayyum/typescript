// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

const users : Array<String> = ["Fahad", "Aftab", "Haider"];
if(users.length === 0){
    console.log("We need to find some users!");
}else{
    // users.forEach(user => console.log("Welcome "+user+" !"));
    let str: string = "";
    str += "Welcome ";
    users.forEach(user => {
        if (user.length > 1){
            str+=user+', ';
        }
    });
    let filteredStr = str.slice(0, str.length-2);
    let splitted = filteredStr.split(" ")
    splitted.splice(splitted.length-1, splitted.length, "and",)
    // console.log('splitted', splitted.push(str.split[str.length-1]));
    let splitt = str.split(", ")[splitted.length-2]
    // console.log('---',splitt)
    console.log('---',typeof splitt)
    splitted.push(splitt+"!")
    console.log('splitted', splitted.join(" "));
    // console.log('splitted', splitted);
console.log(str)
}