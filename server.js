//require consts
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes/notes');

const PORT = process.env.PORT || 3001;

//runing express server
const app = express();

//express middleware
app.use(express.static('public'))
app.use(express.json());
app.use('/',htmlRoutes);
app.use('/api', apiRoutes);




//listening to port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});