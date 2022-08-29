const express = require('express');
const app = express();

app.listen(3001,()=>{
  console.log("PORT ONLINE");
});

app.get('/', (req, res) =>{
  res.status(500).send("Hi");
})