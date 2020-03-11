 function func(arg1, arg2, arg3) {
    let largest = arg1;
    
    if(largest < arg2) {
        largest = arg2;
    }

    if(largest < arg3) {
        largest = arg3;
    }
    return largest;
}
console.log(func(1000,510,440));
console.log(func(1,0,1));
console.log(func(0,-10,-20));

