function exercise1(a) 
{
    a = a.split(" "); //make array of string and split it by spaces

    for (var i = 0, x = a.length; i < x; i++) {
        a[i] = a[i][0].toUpperCase() + a[i].str(1);
    }  //i = location array 
 

    return a.join(" ");  
}

console.log(exercise1("capitalize the first letter of each word"));


