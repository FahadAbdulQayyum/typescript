// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
const ordinalNumbers: Array<number> = [2, 5, 7, 10, 33, 59, 89, 91, 99, 103, 110];

for (let i = 1; i < ordinalNumbers.length; i++) {
    // console.log(i+i===1?'st'?i===2?'nd':i===3?'rd'+ordinalNumbers[i]);
    let prefix = '';
    if (i === 1){
        prefix = 'st';
    }
    else if (i === 2){
        prefix = 'nd';
    }
    else if (i === 3){
        prefix = 'rd';
    }else {
        prefix = 'th';
    }
    console.log(i+prefix+": "+ ordinalNumbers[i]);
}