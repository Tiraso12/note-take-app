const express = require('express');
const path = require('path');
const app = express();

app.set('public', path.join(__dirname, 'public'));

app.get('/public/index.html', (req, res) =>{
  res.render('index.html');
})


app.listen(3001,()=>{
  console.log("PORT ONLINE");
});