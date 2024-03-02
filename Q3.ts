// 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

const personName : string = 'Aftab'

console.log(personName.toLowerCase()) // aftab
console.log(personName.toUpperCase()) // AFTAB
console.log(personName.charAt(0).toUpperCase()+personName.slice(1).toLowerCase()) // Aftab
