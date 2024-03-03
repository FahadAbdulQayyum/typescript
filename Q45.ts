// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

const carsObject: object[] = [];

function carsDetails(manufacturer: string, model: string) {
    let carObj: object = {manufacturer, model};
    carsObject.push(carObj);
}

carsDetails("Toyota", "C2018");
carsDetails("Swift", "C2019");
carsDetails("Mehran", "C2022");
carsDetails("Honda", "C2024");
carsDetails("Civic", "C2022");

console.log(carsObject);