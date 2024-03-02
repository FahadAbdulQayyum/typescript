// 18. Seeing the World: Think of at least five places in the world you’d like to visit.

const placeToVisit1 : Array<String> = ["Mecca", "Madina", "Qatar", "Spain", "Palestine"];

console.log("Places to visit in the original order: " + placeToVisit);

const placeToVisitInAlphabeticalOrder : Array<String> = placeToVisit.sort();

console.log("Places to visit in the alphabetical order: " + placeToVisitInAlphabeticalOrder);

console.log("To ensure the original order: " + placeToVisit);

const placeToVisitInReverseAlphabeticalOrder : Array<String> = placeToVisit.sort().reverse();

console.log("Places to visit in the reverse alphabetical order: " + placeToVisitInReverseAlphabeticalOrder);

console.log("To ensure the original order: " + placeToVisit);

console.log('Original order reversed: ' + placeToVisit.reverse());

console.log('Reversed original orders changed: ' + placeToVisit.reverse().sort());

