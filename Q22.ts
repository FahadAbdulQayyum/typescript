// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const indexError : Array<Number> = [2, 3, 6];

console.log(indexError[3]) // indexError occurs as this does not exist

console.log(indexError[2]) // indexError occurs as this exist, output will be 6


