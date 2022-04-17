const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// set up middleware to parse JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
});