// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicianObj: object[] = [];
let countt: number = 0;
function show_magician(magician: string, skillGrade: string) {
    let info: object = {magician, skillGrade};
    magicianObj.push(info);
    countt++;
}

show_magician("Harry Houdini", "Excellent");
show_magician("David Blaine", "Good");
show_magician("Doug Henning","Not Bad");
show_magician("Dai Vernon", "Poor");

let magicianObjGreat = magicianObj.forEach(magician => "Great "+magician )

console.log(magicianObj, countt)
console.log(magicianObjGreat)