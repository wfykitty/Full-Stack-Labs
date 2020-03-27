var calculator = require('./module/calculator');
var comparer = require('./module/comparer');

function test(a,b){
    if(comparer.AreNumberEqual(a,b)){
        console.log(`numbers are equal ${a},${b},so add them ${calculator.Add(a,b)}`)
    }
    else console.log(`numbers are not equal ${a},${b}, so subtract them ${calculator.Subtract(a,b)}`)
}

test(5,10); 


//rmb calculator.add & calculator.subtract, because its an import
