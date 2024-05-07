// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

function city_country(city: string, country: string): string {
    return "\""+city + ", "+ country + "\"";
}

let cityCountry: string = city_country("Lahore", "Pakistan");
console.log(cityCountry);

cityCountry = city_country("New York", "USA");
console.log(cityCountry);
