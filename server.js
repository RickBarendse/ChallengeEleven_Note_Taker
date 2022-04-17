const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// set up middleware to parse JSON data
app.uae(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));




app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});