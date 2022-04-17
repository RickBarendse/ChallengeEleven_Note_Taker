const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// set up middleware to parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// api routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});