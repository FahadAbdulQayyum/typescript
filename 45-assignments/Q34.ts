// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
const pizzas: Array<string> = ["Fujeta Pizza", "Pepperoni Pizza", "BBQ Chicken Pizza", "Cheeze Pizza"];

pizzas.forEach(pizza => console.log(pizza));
pizzas.forEach(pizza => console.log("I like "+pizza));
console.log("I really love pizzas.");