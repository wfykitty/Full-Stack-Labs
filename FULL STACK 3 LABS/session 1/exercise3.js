// Exercise 3: 
// Write a JavaScript program to move last three 
// character to the start of a given string. 
// The string length must be greater or equal to three.
 
function move(a) {
    if (a.length > 1)
    {
        return a.slice(-3) + a.slice(0, -3);
    }
    return a;
     }
console.log(move("Python"));
console.log(right_three("JavaScript"));
console.log(right_three("Hi"));
