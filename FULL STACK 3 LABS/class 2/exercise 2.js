// Rewrite the following code block using ES6 syntax, 
// ie. const, let, arrow function, template literals and for..of

const gretter = (myArray) => {
    let greetText = 'hello';

    for (let index of myArray) {
        console.log(`${greetText}, ${myArray[index]}`);
    }
}
gretter('Randy Savage', 'Ric Flair', 'Hulk Hogan');



 