const express = require('express');
const PORT = process.env.PORT || 3001;
const data = require('./db/db.json');
const path = require('path');



const app = express();

//express middleware
app.use(express.static('public'))

// api to display html file
app.get('/', (req, res) =>{
 
  res.sendFile(path.join(__dirname + '/public/index.html'));
  
})

//api to notes
app.get('/notes', (req, res)=>{

  res.sendFile(__dirname + '/public/notes.html');
})

//api to db.json
app.get('/api/notes', (req, res)=>{
  res.json(data);
})

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});