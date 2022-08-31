const path = require('path');
const router = require('express').Router();

// api to display html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '../../public/index.html'));
  })

  //api to notes
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../public/notes.html'));
  })


  module.exports = router