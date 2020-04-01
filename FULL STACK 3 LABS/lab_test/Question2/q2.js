const mixedArrat = ['Matrix',1,true, 2, false, 3];

let multiplyNumbers = number => { 
    return number.filter(mixedArrat => typeof mixedArrat === "number")
    .map(mixedArrat => mixedArrat * 5);
};

console.log(multiplyNumbers(mixedArrat));
