const arrayOfNames = ['jaxx', 'tiny', 'clay'];
const mixedArray = ['anarchy', 99, true];

let makeUpperCase = (capName)=> {
    return new Promise((resolve, reject) => {
        capName.map(x => {
            if (typeof x !== 'string')
                reject("Error: Not all items in the array are strings");
            else 
            return x[0].toUpperCase() + x.slice(1);
        });
        resolve(capName);
        });
}

let sortWords = (capName) => {
    return new Promise((resolve, reject) => {
        resolve(capName.sort());
    });
}


makeUpperCase(arrayOfNames)
.then(sortWords)
.then((result) => console.log(result))
.catch((error)=> console.log(error))

makeUpperCase(mixedArray)
.then(sortWords)
.then((result) => console.log(result))
.catch((error)=> console.log(error))
