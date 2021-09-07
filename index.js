const express = require('express');
const app = express();
const port = 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/auth', function(req, res) {
    res.send('auth page');
});

app.get('/logout', function(req, res) {
    res.send('logout page');
});

app.get('/login', function(req, res) {
    res.send('login page');
});
  


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})