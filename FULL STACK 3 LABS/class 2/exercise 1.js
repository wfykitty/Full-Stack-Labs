//write a function that will get the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference


function difference(x) {
    if (x > 13)
    return (x - 13) * 2;

    else
    return 13 - x;

};

console.log(difference(32));
console.log(difference(11));

