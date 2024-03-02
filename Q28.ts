// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

const personAge : number = 5;
if(personAge < 2){
    console.log("You are a baby!");
}
else if(personAge > 2 && personAge < 4){
    console.log("You are a toddler!");
}
else if(personAge > 4 && personAge < 13){
    console.log("You are a kid!");
}
else if(personAge > 13 && personAge < 20){
    console.log("You are a teenager!");
}
else if(personAge > 20 && personAge < 65){
    console.log("You are an adult!");
}
else if(personAge > 65){
    console.log("You are an old!");
}

