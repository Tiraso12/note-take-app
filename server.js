const express = require('express');
const PORT = process.env.PORT || 3001;
const data = require('./db/db.json');



const app = express();

// api to display html file
app.get('/html', (req, res) =>{
 
  res.sendFile(__dirname + '/public/index.html');
  
})

//api to notes
app.get('/notes', (req, res)=>{

  res.sendFile(__dirname + '/public/notes.html');
})

//api to db.json
app.get('/api/data', (req, res)=>{
  res.json(data);
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});