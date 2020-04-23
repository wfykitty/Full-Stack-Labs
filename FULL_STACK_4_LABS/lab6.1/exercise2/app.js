var express = require('express');
var app = express();

app.listen(3000);

// app.get('/json', function (req, res) {
//     res.send("hello World!");
//   });
  
var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  app.use(requestTime)


app.get('/greet', function (req, res) {
  console.log('GET received: ' + req.requestTime);
    res.send('hello world!');
})

app.get('/greet', function (req, res){
  console.log('POST received: ' + req.requestTime);
    res.send('hello world!');
})

app.delete('/greet', function (req, res) {
  console.log('DELETE received: ' + req.requestTime);
    res.send('hello world!');
  })
  
app.put('/greet', function (req, res) {
  console.log('PUT received: ' + req.requestTime);
    res.send('hello world!')
  })

