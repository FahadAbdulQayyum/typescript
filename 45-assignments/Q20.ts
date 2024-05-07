// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const lists : Array<String> = [];
function createLists(input : String) : Array<String> {
    lists.push(input);
    return lists;
}

createLists("K2");
createLists("Chenab");
createLists("Madina");
createLists("Karachi");

const LetsSeeList = createLists("Typescript");

console.log("Lets See the List", createLists);

