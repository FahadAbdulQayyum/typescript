// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const myProfile : {name: string,age: number} = {
    name: "Fahad",
    age: 26
    };

// OR

type profileType = {name: string, age: number};

const myProfileWithType : profileType = {
    name: "Fahad", 
    age: 25
}


