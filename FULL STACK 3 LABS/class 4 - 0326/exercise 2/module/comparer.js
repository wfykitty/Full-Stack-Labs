//Comparer will export a function named AreNumberEqual , which will compare
//two numbers and return true or false, if equal or not equal.

exports.AreNumberEqual = function(a,b){
    if (a === b){
        return true;
    } else {
        return false;
        }
        
    }

// way2: exports.AreNumberEqual2 = (arg1, arg2) => arg1 === arg2;

// way3: module.exports = {
//     AreNumberEqual: function(a,b){
//       if a === b{
//           return true;
//       } else {
//           return false;
//           }
          
//       }
//   }


