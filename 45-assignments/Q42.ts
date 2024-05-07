// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

function make_great(magician: Array<string>) {
    magician.forEach(name => console.log('Great '+name+"."));
}

show_magicians(["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"])