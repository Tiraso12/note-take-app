const express = require('express');
const PORT = process.env.PORT || 3001;
const data = require('./db/db.json');
const path = require('path');
const fs = require('fs');



const app = express();
app.use(express.json());

//express middleware
app.use(express.static('public'))

// api to display html file
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname + '/public/index.html'));

})

//api to notes
app.get('/notes', (req, res) => {

  res.sendFile(__dirname + '/public/notes.html');
})

//api to db.json
app.get('/api/notes', (req, res) => {
  res.json(data);
})

//api to post notes
app.post('/api/notes', (req, res) =>{
  //const to show the request was received
  console.info(`${req.method} request received to add note`);
 
  //desctructuring req object body
  const { title, text } = req.body;

    //if all properties true create object
  if(title && text){
      const newNote ={
        title,
        text
      }

      data.push(newNote)
  }

  res.send(data);
})




app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});