// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

const orders : Array<string> = [];

function sandwichOrder(order: string) {
    orders.push(order);
}

sandwichOrder("Onion");
sandwichOrder("Tomato");
sandwichOrder("Egg");
sandwichOrder("Kebab");
sandwichOrder("Cucumber");

console.log(orders);