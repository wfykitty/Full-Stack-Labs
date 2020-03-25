const say = require('say')
 
function hello(){
    say.speak("feiya, how are you?", 'Alex', 0.5)
    console.log('not bad');
}

setTimeout(hello, 100)