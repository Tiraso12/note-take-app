const express = require('express');
const PORT = process.env.PORT || 3001;
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes/notes');



const app = express();

//express middleware
app.use(express.static('public'))
app.use(express.json());
app.use('/',htmlRoutes);
app.use('/api', apiRoutes);





app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});