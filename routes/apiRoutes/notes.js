const router = require('express').Router();
const data = require('../../db/db.json');
const fs = require('fs');


//api to db.json
router.get('/notes', (req, res) => {
    //return the array form the db
    res.json(data);
})

//api to post notes
router.post('/notes', (req, res) => {
    //const to show the request was received
    console.info(`${req.method} request received to add note`);
    //creating id
    const id = data.length.toString();
    //desctructuring req object body
    const { title, text } = req.body;

    //if all properties true create object
    if (title && text) {
        const newNote = {
            id: id,
            title,
            text
        }
        //add the `newNote` to the json file
        data.push(newNote)
        //writing the json file with new notes updated
        fs.writeFile('./db/db.json', JSON.stringify(data, null, 4),
            (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated notes!')
        );
        //the response for the post
        const response = {
            status: 'success',
            body: newNote,
        }
        console.log(response);
        res.json(response);
    }

})

// //API TO DELETE
router.delete('/notes/:id', (req, res) => {
    //taking id parameter from request
    const id = req.params.id;
    //find the index that matches the id in the req paramn and stores it in a const
    const noteId = data.findIndex(data => data.id === id )

    data.splice(noteId, 1)

    res.json(data);
})

module.exports = router;