const compareNumToTen = (compareNum) => {
    return new Promise((resolve, reject) => {
    if (compareNum > 10) 
        resolve(`${compareNum} is greater than 10, success!`);
    else 
        reject (`${compareNum} is less than 10, error!`);
    });
};

compareNumToTen(15)
.then(result => console.log(result))
.catch(error => console.log(error))

compareNumToTen(8)
.then(result => console.log(result))
.catch(error => console.log(error))
  